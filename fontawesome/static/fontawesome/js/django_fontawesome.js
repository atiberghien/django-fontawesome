if (!$) {
    var $ = jQuery = django.jQuery;
}

$(function() {
  // Handler for .load() called.
  fontawesomeIconDropdown();
});

function fontawesomeIconDropdown() {
    //check if select fontawesome-select exist
    if ($('select.fontawesome-select').length > 0) {
      install();

        // Install on dynamically created inline items
      var jquery_version = parseFloat($.fn.jquery);
      if (jquery_version < 2.1) {
          // pre django 1.9
           $('.inline-group .add-row a').click(function(){
              install();
          });
      } else {
          // django 1.9+
          $(document).on('formset:added', function(){
              install();
          });
      }
    }

}

function format(state) {
    if (!state.id) { return state.text; }
    var icon = $(state.element).data('icon');
    return '<i class="' + icon + '"></i> ' + state.text;
}

var endsWith = function(value, suffix){
    return value.indexOf(suffix, value.length - suffix.length) !== -1;
};

var install  = function(){
    $('.fontawesome-select').each(function(){
        if ($(this).data('select2')){
            // Already installed - nothing to do
            return;
        }
        var id = $(this).parents('.empty-form ').attr('id');
        if( id != null){

            // Inline formsets contains a template for the select with '-empty' suffix in the id.
            // We do not want to install select2 on the template, as clicking '.add-row a' calls clone which will break the select2
            var suffix = "-empty";
            var isEmptyTemplate = endsWith(id, "-empty");

            if(isEmptyTemplate){
                return;
            }
        }

        $(this).select2({
            width:'element',
            templateResult:format,
            templateSelection:format,
            escapeMarkup: function(m) {return m;}
        });

    });
}
