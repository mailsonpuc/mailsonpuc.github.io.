let button = document.querySelector("#btn")
//console.log(button)

let x = document.querySelector("#myAudio")
//console.log(x)

function playAudio() { 
  x.play(); 
} 

button.onclick=function(){
	playAudio()
}
