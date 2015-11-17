var systemObject = {

    toLower: function() {

        "use strict";

        $(document).on('click', '.toLower', function(event) {

            event.preventDefault();
            event.stopPropagation();

            var target = $(this).data('target'),
                value = $(target).val();

            $(target).val(value.toLowerCase());

        });

    }

};

$(function() {

    "use strict";

    systemObject.toLower();

});