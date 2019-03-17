/*
 * View model for APCUPC
 *
 * Author: OutsourcedGuru
 * License: AGPLv3
 */
$(function() {
    function ApcupcViewModel(parameters) {
        var self = this;
        saveInit = function() {
            $.ajax({
                url:         "/api/plugin/apcupc",
                type:        "POST",
                contentType: "application/json",
                dataType:    "json",
                headers:     {"X-Api-Key": UI_API_KEY},
                data:        JSON.stringify({"command": "save", "init": true}),
                complete: function () {
                }
            });
            return true;
        };
    }

    OCTOPRINT_VIEWMODELS.push({
        construct:                          ApcupcViewModel,
        dependencies:                       [],
        elements:                           []
    });
});
