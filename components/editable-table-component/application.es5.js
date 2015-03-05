"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

(function () {
    angular.module("JpApplication", []);

    var JpEditableTableController = (function () {
        function JpEditableTableController($log, $timeout) {
            _classCallCheck(this, JpEditableTableController);

            this.$log = $log;
            this.$timeout = $timeout;
        }

        _prototypeProperties(JpEditableTableController, null, {
            select: {
                value: function select(element, index) {
                    element.selected = true;
                    var elem = document.getElementById("editable-field-" + index);
                    this.$timeout(function () {
                        elem.select();
                    }, 0);
                },
                writable: true,
                configurable: true
            },
            deselect: {
                value: function deselect(element) {
                    element.selected = false;
                },
                writable: true,
                configurable: true
            }
        });

        return JpEditableTableController;
    })();

    JpEditableTableController.$inject = ["$log", "$timeout"];

    var EditableTableDefinition = function EditableTableDefinition() {
        return {
            restrict: "E",
            scope: {
                etSource: "="
            },
            bindToController: true,
            controller: JpEditableTableController,
            controllerAs: "Table",
            templateUrl: "jp-editable-table.html"
        };
    };

    angular.module("JpApplication").directive("jpEditableTable", EditableTableDefinition);
})();
