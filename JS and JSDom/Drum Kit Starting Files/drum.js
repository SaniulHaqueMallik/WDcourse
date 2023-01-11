// The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

var numOfButton = document.querySelectorAll(".drum").length
for(var i = 0; i<numOfButton; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick(){
   var buttonInnerHTML = this.innerHTML;
   buttonAnimation(buttonInnerHTML)
    switch(buttonInnerHTML){
        case "w":
            // function Audio(fileLocation){
            //     this.fileLocation = fileLocation;
            //     this.play = function(){
            //         **play the file
            //     }
            // }
            var audio = new Audio("./sounds/crash.mp3")
            audio.play()
            break;
        case "a":
            var audio = new Audio("./sounds/kick-bass.mp3")
            audio.play()
            break;
        case "s":
            var audio = new Audio("./sounds/snare.mp3")
            audio.play()
            break;
        case "d":
            var audio = new Audio("./sounds/tom-1.mp3")
            audio.play()
            break;
        case "j":
            var audio = new Audio("./sounds/tom-2.mp3")
            audio.play()
            break;
        case "k":
            var audio = new Audio("./sounds/tom-3.mp3")
            audio.play()
            break;
        case "l":
            var audio = new Audio("./sounds/tom-4.mp3")
            audio.play()
            break;
        default:
            console.log(buttonInnerHTML);

    }

});
}
// var audio = new Audio("./sounds/tom-1.mp3")
// audio.play()

document.addEventListener("keydown", function(event){
    makeSound(event.key)
    buttonAnimation(event.key)
})

function makeSound(key){
    switch(key){
        case "w":
            // function Audio(fileLocation){
            //     this.fileLocation = fileLocation;
            //     this.play = function(){
            //         **play the file
            //     }
            // }
            var audio = new Audio("./sounds/crash.mp3")
            audio.play()
            break;
        case "a":
            var audio = new Audio("./sounds/kick-bass.mp3")
            audio.play()
            break;
        case "s":
            var audio = new Audio("./sounds/snare.mp3")
            audio.play()
            break;
        case "d":
            var audio = new Audio("./sounds/tom-1.mp3")
            audio.play()
            break;
        case "j":
            var audio = new Audio("./sounds/tom-2.mp3")
            audio.play()
            break;
        case "k":
            var audio = new Audio("./sounds/tom-3.mp3")
            audio.play()
            break;
        case "l":
            var audio = new Audio("./sounds/tom-4.mp3")
            audio.play()
            break;
        default:
            console.log(buttonInnerHTML);

    }

}

function buttonAnimation(currentKey){
    var activeButton =   document.querySelector("."+currentKey)
    activeButton.classList.add("pressed")
    setTimeout(function(){
        activeButton.classList.remove("pressed")

    }, 100)
}