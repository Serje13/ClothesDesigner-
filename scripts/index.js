window.onload = function() {
  $.ajax({
    type : 'GET',
    url : 'colors.json',
    dataType: 'json',
    success : function(response) {
        var $el = $('#list');
        $.each(response, function(key,obj) { 
          if (obj.name === 'white') {
            $el.append('<div class="product-constructor__color-item active" id="'+obj.name+'" style="background-color:'+obj.name+'" data-liSF="'+obj.liSF+'" data-liSB="'+obj.liSB+'" data-sF="'+obj.sF+'" data-sB="'+obj.sB+'"></div>');
          }
          else {
            $el.append('<div class="product-constructor__color-item" id="'+obj.name+'" style="background-color:'+obj.name+'" data-liSF="'+obj.liSF+'" data-liSB="'+obj.liSB+'" data-sF="'+obj.sF+'" data-sB="'+obj.sB+'"></div>');
          }
        });
        //Change images onClick Color
        $('.product-constructor__color-item').click( function() { 
          const mainF = $('#main');
          const smallFront = $('#smallFront'); 
          const smallBack = $('#smallBack');
          const srcMainF = $(this).attr('data-lisf');
          const srcSF = $(this).attr('data-sf');
          const srcSB = $(this).attr('data-sb');
          
          mainF.attr('src', srcMainF);
          smallFront.attr('src', srcSF);
          smallBack.attr('src', srcSB);
          //Change Active Colors
          $('.product-constructor__color-list div').removeClass('active');
          $(this).addClass('active');
          
          // Set by defaul SmallFront Active onChange Color
          const $test = $('.product-constructor__sides-list');
          const $liActiveDefault = $('#lisf'); 
          const $liactive = $test.find('li.active');
          if ($liactive !==  $liActiveDefault) {
            $liactive.removeClass('active');
            $liActiveDefault.addClass('active');
          }
        });

        //Change Main-Front and Main-Back Images
        $('.product-constructor__sides-list li').bind('click', function() {
          $('.product-constructor__sides-list li').removeClass('active');
          $(this).addClass('active');
          const mainF = $('#main');
          //const $idcolorActive = $('.product-constructor__color-list').find('div.active').attr('id');
          //const $nActivePrev = $(this).attr('data-'+$idcolorActive);
          //mainF.attr('src', $nActivePrev);
          const $nActivePrev = $(this).attr('id');
          console.log($nActivePrev);
          const $idcolorActive = $('.product-constructor__color-list').find('div.active').attr('data-'+$nActivePrev);
          mainF.attr('src', $idcolorActive);
        });

        //Set the JQuery VALIDATOR
        jQuery.validator.setDefaults({
          debug: true,
          success: "valid"
        });

        //Form Validation
        $('#myForm').validate({
          rules: {
            quantity: {
              required: true,
              number: true,
              digits: true,
              maxlength: 2,
              max: 80
              
            }
          },
          messages: {
            quantity: {
                required: 'This field should`t be Empty!',
                number: 'You may enter just number!',
                digits: 'You may enter just digits!',
                max: '80 - is MAX quantity!',
                maxlength: 'Max length of this field - 2'
      
            }
          }
        });
    }
  }); 
    
}
