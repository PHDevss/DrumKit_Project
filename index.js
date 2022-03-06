for (let i = 0; i < document.querySelectorAll(".drum").length; i++ ) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick)
}
    

function handleClick() {
    console.log(this.innerHTML);
}



const audio = new Audio('./sounds/crash.mp3')
audio.play()