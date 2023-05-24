const button = document.getElementById("start");
const list = document.getElementById("list");
list.style.display = "none";
button.addEventListener("click", (event) => {
    if (list.style.display == "none") {
        list.style.display = "block";   
    }
    else{
        list.style.display = "none";
    }
})
function playsound(audioNAme,loop) {
    const audio = new Audio(audioName,);
    audio.loop = loop;
    audio.play();
}
playsound("./bgaudio.mp3",true)