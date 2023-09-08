function playKey(key){

    switch(key){
        case 'q':
            playSound("crash");
            break;
        case 'w':
            playSound("kick-bass");
            break;
        case 'e':
            playSound("snare");
            break;
        case 'r':
            playSound("tom-1");
            break;
        case 't':
            playSound("tom-2");
            break;
        case 'y':
            playSound("tom-3");
            break;
        case 'u':
            playSound("tom-4");
            break;
    }

}


function playSound(sound){
    let audio = new Audio(`./sounds/${sound}.mp3`);
    audio.play();
}


function buttonAnimation(key){
    document.querySelector(`.${key}`).classList.add("pressed") 
    setTimeout(function(){
        document.querySelector(`.${key}`).classList.remove("pressed") 
   }, 100);
}


for(btn of document.querySelectorAll("button.drum")){
    btn.addEventListener("click", function(){
        playKey(this.innerHTML);
        buttonAnimation(this.innerHTML)
    });
};


document.addEventListener("keydown", function(event){
    // keydown { target: body, key: "g", charCode: 0, keyCode: 71 }
    playKey(event.key);
    buttonAnimation(event.key)
    
});