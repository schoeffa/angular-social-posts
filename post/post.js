"use strict";
const post = {
    templateUrl: "/post/post.html",
    bindings: {post: "<", removePost: "&"},
    controller: [function() {
        const vm = this;
        vm.upvotes = 0;
        vm.upVote = () => {
            vm.upvotes++;
        };
    }]
};

angular.module("App").component("post", post);