var numberofButton = document.querySelectorAll(".drum").length;

for(var i = 0 ; i<numberofButton ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    });
}
document.addEventListener('keydown',function(event){
    makeSound(event.key);
});
function makeSound(key){
    switch(key){
        case "w":
        var tom1 = new Audio('songs/tom-1.mp3');
        tom1.play();
        break;

        case "a":
        var tom2 = new Audio('songs/tom-2.mp3');
        tom2.play();
        break;

        case "s":
        var tom3 = new Audio('songs/tom-3.mp3');
        tom3.play();
        break;

        case "d":
        var tom4 = new Audio('songs/tom-4.mp3');
        tom4.play();
        break;

        case "j":
        var crash = new Audio('songs/crash.mp3');
        crash.play();
        break;

        case "k":
        var snare = new Audio('songs/snare.mp3');
        snare.play();
        break;

        case "l":
        var kick = new Audio('songs/kick-bass.mp3');
        kick-bass.play();
        break;
    }
    }
