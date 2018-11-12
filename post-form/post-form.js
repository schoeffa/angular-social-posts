"use strict";
const postForm = {
    templateUrl: "/post-form/post-form.html",
    bindings: {onSubmit: "&"},
    controller: [function() {
        const vm = this;
    }]
};

angular.module("App").component("postForm", postForm);