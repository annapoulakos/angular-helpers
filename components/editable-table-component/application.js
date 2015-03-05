(function () {
    angular.module('JpApplication', []);

    class JpEditableTableController {
        constructor ($log, $timeout) {
            this.$log = $log;
            this.$timeout = $timeout;
        }

        select (element, index) {
            element.selected = true;
            var elem = document.getElementById('editable-field-' + index);
            this.$timeout(function () { elem.select(); }, 0);
        }

        deselect (element) {
            element.selected = false;
        }
    }

    JpEditableTableController.$inject = ['$log', '$timeout'];

    var EditableTableDefinition = function () {
        return {
            restrict: 'E',
            scope: {
                etSource: '='
            },
            bindToController: true,
            controller: JpEditableTableController,
            controllerAs: 'Table',
            templateUrl: 'jp-editable-table.html'
        };
    };

    angular.module('JpApplication').directive('jpEditableTable', EditableTableDefinition);
}());
