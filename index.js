var audio1 =new Audio('./sounds/tom-1.mp3');
var audio2 =new Audio('./sounds/tom-2.mp3');
var audio3 =new Audio('./sounds/tom-3.mp3');
var audio4 =new Audio('./sounds/tom-4.mp3');
var audio5 =new Audio('./sounds/crash.mp3');
var audio6 =new Audio('./sounds/kick-bass.mp3');
var audio7 =new Audio('./sounds/snare.mp3');

for(var i=0;i < document.querySelectorAll(".drum").length;i++)
{
document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonInnerHTML =this.innerHTML;
   makeSound(buttonInnerHTML);
   buttonAnimation(buttonInnerHTML);
});
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(key){
switch (key) {
    case "w":
        audio1.play();
        break;

        case "a":
            audio2.play();
            break;
            case "s":
                audio3.play();
                break;
                case "d":
                    audio4.play();
                    break;
                    case "j":
                        audio5.play();
                        break;
                        case "k":
                            audio6.play();
                            break;
                            case "l":
                                audio7.play();
                                break;
      
   
    default:
        break;
   }
}

function buttonAnimation(currentkey){
  document.querySelector("."+currentkey).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+currentkey).classList.remove("pressed");
  }, 100);
}
