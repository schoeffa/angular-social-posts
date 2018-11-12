"use strict";
const socialPosts = {
    templateUrl: "/social-posts/social-posts.html",
    controller: [function() {
        const vm = this;
        vm.posts = [{
            title: "Pygmy Sqiud",
            content: "Angelfish love, applesnail Snaggletooth shark octopus bannerfish, beautiful Bursa trigger monster captive, a fishbowl possession cat shark at parrotfish. Quagga mussel cat shark is batfish frogfish. Hippo tang gold damsel peaclam, swam at Mandarinfish, puffer fish is sea grape. Hippo tang snaggletooth shark, drenched rabbitfish The crackin, with frogfish lobste."
        },{
            title: "Flapjack Octopus",
            content: "Peaclam, or shaking with filefish quagga mussel plunge. Nurse shark at goatfish grey whale. Quagga mussel grey whale mermaid appeared. Fishies asian clam painted comber, king crab a elktoe a, grey whale seahorse. Foxface cardinalfish seabass pebblesnail faucet snail or rock lobster spotted sweetlips. Bonnethead at puffer fish pipefish octopus threadfin."
        },{
            title: "Cock-Eyed Squid",
            content: "Nurse shark at goatfish grey whale. Quagga mussel grey whale mermaid appeared. Zebra moray a banded grunt houndshark. Swim clownfish fun, snowcrab a.Algae starfish, going down in scorpionfish angelfish. Black clown goby, tilefish catshark sea grape starfish, banana wrasse starfish wobbegong shark, grouper batfish ear snail are at the bottom. Manta ra."
        },{
            title: "Vampire Squid",
            content: "With lionfish ect. Milk shark swim Asian clam soldierfish. In Beautiful, ocean is Asian clam elktoe, cardinalfish deep heelsplitter foxface, with crazy Manta ray catshark shaking filefish. Coral hogfish snake eel goatfish and Black clown goby fanatic jumping at a nurse shark. Quagga mussel grey whale mermaid appeared. Foxface wabash pigtoe, ear snail banded sole or, mermaid in sea. In the coral threadfin hawkfish. Hipp."
        },{
            title: "Paper Nautilus",
            content: "Tang snaggletooth shark, drenched rabbitfish The crackin, with frogfish lobster peaclam, or shaking with filefish quagga mussel plunge. In the coral threadfin hawkfish. Spotted sweetlips loving in catshark pebblesnail at seabass with faucet snail. Mandarinfish in a fire fish, an algae unknown. Zebra moray a banded grunt houndshark. Colorful blue tang houndshark, swim at banded grunt in, net a king crab. Spotted sweetlip."
        }]
        vm.display = false;
        vm.upvotes = 0;
        vm.displayForm = () => {
            vm.display = !vm.display;
        };
        vm.onSubmit = (newTitle, newContent) => {
            vm.display = false;
            vm.posts.push({
                title: newTitle,
                content: newContent
            });
        };
        vm.removePost = (post) => {
            vm.posts.splice(vm.posts.indexOf(post), 1);
        };
        vm.upVote = () => {
            vm.upvotes++;
        }
    }]
};

angular.module("App").component("socialPosts", socialPosts);