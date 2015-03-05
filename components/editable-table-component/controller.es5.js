"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

(function () {
    var JpController = function JpController() {
        _classCallCheck(this, JpController);

        this.data = [{ label: "Field 1", value: "1" }, { label: "Field 2", value: "2" }, { label: "Field 3", value: "3" }];
    };

    JpController.$inject = [];

    angular.module("JpApplication").controller("JpController", JpController);
})();
