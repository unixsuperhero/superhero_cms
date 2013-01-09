SUPER_ELEMENT = null
$(document).ready( function(){
  USE_SUPER_POWERS = function() {
    $('.superimg').each(function(i,e) {
      $(e).click(function(ev){
        SUPER_ELEMENT = this
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
