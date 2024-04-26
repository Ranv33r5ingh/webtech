
for(var i=0;i<(document.querySelectorAll(".drum").length);i++){

document.querySelectorAll(".drum")[i].addEventListener("click", clicking);
}
function clicking() {
  makeSound(this.innerHTML);
  aniMation(this.innerHTML);
}
document.addEventListener("keypress",function(event){
  makeSound(event.key);
  aniMation(event.key);
});

function makeSound(key){
  var aud
  switch (key) {
    case "w":
    aud=new Audio('sounds/tom-1.mp3');
    aud.play();
    break;
    case "a":
    aud=new Audio('sounds/tom-2.mp3');
    aud.play();
    break;
    case "s":
    aud=new Audio('sounds/tom-3.mp3');
    aud.play();
    break;
    case "d":
    aud=new Audio('sounds/tom-4.mp3');
    aud.play();
    break;
    case "j":
    aud=new Audio('sounds/snare.mp3');
    aud.play();
    break;
    case "k":
    aud=new Audio('sounds/kick-bass.mp3');
    aud.play();
    break;
    case "l":
    aud=new Audio('sounds/crash.mp3');
    aud.play();
    break;
    default:
  }
}

function aniMation(current){
  var active=document.querySelector("." + current);
  active.classList.add("pressed");
  setTimeout(function() { active.classList.remove("pressed"); }, 100);
}

var app = angular.module('keypressApp', []);

app.controller('KeypressController', function($scope, $timeout) {
  $scope.logText = "";

  $scope.showLogbook = false;

  window.addEventListener('keypress', function(event) {
    var allowedKeys = ['w', 'a', 's', 'd', 'j', 'k', 'l'];
    if (allowedKeys.includes(event.key.toLowerCase())) {
      $scope.$apply(function() {
        $scope.logText += event.key.toLowerCase() + "  ";
        $scope.showLogbook = true;

        $timeout(function() {
          $scope.showLogbook = false;
        }, 2000);
      });
    }
  });

  $scope.logButtonClick = function(key) {
    $scope.logText += key + "  ";
    $scope.showLogbook = true;

    $timeout(function() {
      $scope.showLogbook = false;
    }, 2000);
  };
});