console.log('Welcome to Clone of Spotify');
// Initialize the variables
alert('Spotify Web Player.')
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay  = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "For The Record", filePath: "1.mp3", coversPath: "covers/1.jpg"},
    {songName: "Pasoori", filePath: "songs 2.mp3", covesrPath: "covers/2.jpg"},
    {songName: "Give me some Sunshine", filePath: "songs 3.mp3", coversPath: "covers/3.jpg"},
    {songName: "Bhool Bhulaiya", filePath: "songs 4.mp3", coversPath: "covers/4.jpg"},
    {songName: "Ganja", filePath: "songs 5.mp3", coversPath: "covers/5.jpg"},
    {songName: "Stay X Ranjha", filePath: "songs 6.mp3", coversPath: "covers/6.jpg"},
    

]

// songItems.forEach((element, i)=>{
    // console.log(element, i);    
    // element.getElementsByTagName("img")[0].src = songs[i].coversPath;
// })
//audioElement.play();


// Handle play/pause click
masterPlay.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Listens to Events
audioElement.addEventListener('timeupdate', ()=> {
    //console.log('timeupdate');
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
  audioElement.currentTime = myProgressBar.value * audioElement.duration/100;  
})


