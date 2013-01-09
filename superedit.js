SUPER_ELEMENT = null
$(document).ready( function(){
  $('.superimg').each(function(i,e) {
    $(e).click(function(e){
      SUPER_ELEMENT = e
      alert('load image changer here (src,alt,maybe even uploader)');
      return false;
    });
  });

  $('.superedit').each(function(i,e) {
    $(e).attr('contentEditable', 'true');
  });

  $('.supergroup').each(function(i,e) {
    /******************************************************************
     * MIGHT NOT NEED THIS GROUPING
     *   .superitem can have an attr that says:
     *   item_type (basically, partial name)
     *   so classes would work as usual (.super{edit,img})
     *   but the ones that match: ".superitem .super{edit,img}"
     *   will be grouped into an array, with a key of the
     *   specified type
     ******************************************************************/
    //$(e).mouseover(function(){
    //  alert($(e).children().length);
    //  $(e).prepend('<a href="#" class="superadd">Add</a>');
    //});
  });

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
});
