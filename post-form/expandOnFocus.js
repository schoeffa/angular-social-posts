"use strict";

function expandOnFocus() {
    return {
        restrict: "A",
        replace: false,
        link: function ($scope, $element, $attrs) {
            $element.on("focus", () => {
                $element[0].style.width = "619px";
                if ($element[0].tagName === "INPUT") {
                    $element[0].style.height = "50px";
                } else if ($element[0].tagName === "TEXTAREA") {
                    $element[0].style.height = "400px";
                }
            });
            $element.on("blur", () => {
                $element[0].style.width = "";
                if ($element[0].tagName === "INPUT") {
                    $element[0].style.height = "";
                } else if ($element[0].tagName === "TEXTAREA") {
                    $element[0].style.height = "";
                }
            });
        }
    }
}

angular.module("App").directive("expandOnFocus", expandOnFocus);

