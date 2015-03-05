(function () {
    class JpController {
        constructor () {
            this.data = [
                {label: 'Field 1', value: '1'},
                {label: 'Field 2', value: '2'},
                {label: 'Field 3', value: '3'}
            ];
        }
    }

    JpController.$inject = [];

    angular.module('JpApplication')
    .controller('JpController', JpController);
}());
