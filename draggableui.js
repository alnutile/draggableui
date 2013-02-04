/*
 * @file
 * JavaScript for ajax_example.
 *
 * See @link ajax_example_dependent_dropdown_degrades @endlink for
 * details on what this file does. It is not used in any other example.
 */

(function($) {
  // Re-enable form elements that are disabled for non-ajax situations.
  Drupal.behaviors.dragExample = {
    attach: function() {
      //Bind and action and reaction when a user clicks the link
      $( ".draggable" ).draggable({
        drag: function(event) {
          //Where?
          now = $(this).attr('id');
          nowleft = $(this).css('left');
          nowtop = $(this).css('top');
        }
        });
      
      $( ".droppable" ).droppable({
        drop: function(event, ui) {
          //Where?
          var where = event.target;
          var where = $(where).attr('id');
          //console.log(where);
          var who = ui.draggable;
          var who = $(who).attr('id');
          var left = $('#'+who).css('left');
          var top = $('#'+who).css('top');
          $('input.'+who+'-left').val(left);
          $('input.'+who+'-top').val(top);
          $('input.'+who+'-where').val(where);
        }
      });

      }
  };

})(jQuery);
