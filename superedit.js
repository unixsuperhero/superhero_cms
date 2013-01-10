SUPER_ELEMENT = null
SUPER_IMAGE_TIMER = null
$(document).ready( function(){
  USE_SUPER_POWERS = function() {
    $('a').click(function(){return false;});
    $('.superimg').each(function(i,e) {
      $(e).click(function(ev){
        SUPER_ELEMENT = this
        if($('#super_settings:hidden'))
          $('#super_settings').show();
        $('#super_image_source').focus();
        // LOAD IMAGE_SWITCHER HERE
        return false;
      });
    });

    $('.superedit').each(function(i,e) {
      $(e).attr('contentEditable', 'true');
      $(e).click(function(ev){
        SUPER_ELEMENT = this
      });
    });

    update_image_preview_timer = function() {
      if(super_image_source = $('#super_image_source').val()) {
        $('#super_image_preview').show();
        $('#super_image_preview').attr('src', super_image_source);
      } else {
        $('#super_image_preview').hide();
      }
    }

    $.get('super_editor/_super_editor.html').complete(function(x,d,other) {
      $('body').prepend(x.responseText);
    });

    $.get('super_editor/_image_modal.html').complete(function(x,d,other) {
      append_return_value = $('body').append(x.responseText);
      $('#super_image_source').keyup(function(ev) {
        if(SUPER_IMAGE_TIMER != null) {
          clearTimeout(SUPER_IMAGE_TIMER)
          SUPER_IMAGE_TIMER = null;
        }
        SUPER_IMAGE_TIMER = setTimeout(update_image_preview_timer, 500);
      });
    });

    //settings_container = '<div id="super_settings">&nbsp;</div>';
    //append_return_value = $('body').append(settings_container);
  };

  // MAYBE $(.superitem) should be in _POWERS ^
  // because it is a part of the init super setup
  // then, we should have a function for saving?
  // that differentiates between partials and
  // standalone items.
  // or, serverside, we can inject a list of
  // all the super-type attributes we accept
  // for this particular template

    /******************************************************************
     * MIGHT NOT NEED THIS $('.supergroup') GROUPING
     *   .superitem can have an attr that says:
     *   item_type (basically, partial name)
     *   so classes would work as usual (.super{edit,img})
     *   but the ones that match: ".superitem .super{edit,img}"
     *   will be grouped into an array, with a key of the
     *   specified type
     ******************************************************************/

  $('.superitem').each(function(i,e) {
    $(e).click(function(){
      /************************************************************
       * SHOW COLLECTION EDIT OPTIONS IN BOX AT THE TOP
       * ----------------------------------------------
       * The buttons that say:
       *   "Add New Item" or "Remove This Item"
       ************************************************************/
    });
    //$(e).mouseout(function(){
    //  $(e).children('.superremove').remove();
    //});
  });

  USE_SUPER_POWERS();
});

/***********************
 ***********************
 ** SAVE DYNAMIC DATA **
 ***********************
 ***********************/

post_data = {};
setup_post_data = function(i,e){
  st = $(e).attr('super-type')
  post_data[st] = post_data[st] || $([])
};
$('.superitem[super-type]').each(setup_post_data);
