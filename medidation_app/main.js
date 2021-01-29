let playImgBlock = document.querySelector("#play-img-block");
let startVideo = document.querySelector("#start-video");
let stopVideo = document.querySelector("#stop-video");

let videoBLock = document.querySelector("#video-block");



/*действия при нажатии на кнопкии  воспроизведение/ пауза */

startVideo.addEventListener("click", function(){
   startVideo.style.display = "none"
   stopVideo.style.display ="block"

   countdown();

   videoBLock.play();
   soundSelector.play();

})

stopVideo.addEventListener("click", function(){
   startVideo.style.display = "block"
   stopVideo.style.display ="none"

   clearTimeout(setIntervalTime);

   videoBLock.pause();
   soundSelector.pause();
})



/*выбор звука  и видео*/

let playAudioRiver = document.querySelector("#river-sound");
let playAudioRain = document.querySelector("#rain-sound");
let playAudioBirds = document.querySelector("#birds-sound");

let soundSelector = document.querySelector("#sound-sound");



playAudioRiver.addEventListener("click", function(){
   soundSelector.src = "sounds/river_sound.mp3";

     startVideo.style.display = "block";
     stopVideo.style.display ="none";

   videoBLock.src = "video/river.mp4"

   clearInterval(setIntervalTime);
})

playAudioRain.addEventListener("click", function(){
   soundSelector.src = "sounds/dozhd_sound.mp3";

   startVideo.style.display = "block";
   stopVideo.style.display ="none";

   videoBLock.src = "video/rain.mp4"


   clearInterval(setIntervalTime);
})

playAudioBirds.addEventListener("click", function(){
   soundSelector.src = "sounds/birds_sound.mp3";

     startVideo.style.display = "block";
   stopVideo.style.display ="none";

   videoBLock.src = "video/birds.mp4"

   clearInterval(setIntervalTime);
});




/*Обратный отсчет*/

let timerMinutes = document.querySelector("[data-timerMin]")
let timerSecundes = document.querySelector("[data-timerSec]")
let setIntervalTime;

function countdown(){
   setIntervalTime = setInterval(()=>{
      let timerSecundesCounter = +timerSecundes.textContent;
      let timerMinutesCounter = +timerMinutes.textContent


      if (timerSecundesCounter == 0 || timerSecundesCounter ==00){
         timerSecundesCounter = 59;
         timerMinutesCounter --;
      } else {
         timerSecundesCounter --;
      }

      if(timerMinutesCounter < 10){
         timerMinutesCounter = `${0}${timerMinutesCounter}`
      }


      if(timerSecundesCounter < 10){
         timerSecundesCounter = `${0}${timerSecundesCounter}`
      }

      timerSecundes.textContent = timerSecundesCounter;
      timerMinutes.textContent = timerMinutesCounter;



      if (timerSecundes.textContent == 0 && timerMinutes.textContent ==0){
         clearInterval(setIntervalTime);
      }

   },1000);

}


/*Выбор времени*/

let timeCollection = document.querySelectorAll("[data-time]");

timeCollection[0].addEventListener("click", function(){
   timerMinutes.textContent = 20;
   timerSecundes.textContent = '00';
})

timeCollection[1].addEventListener("click", function(){
   timerMinutes.textContent = 30;
   timerSecundes.textContent = '00';
})

timeCollection[2].addEventListener("click", function(){
   timerMinutes.textContent = 60;
   timerSecundes.textContent = '00';
})

