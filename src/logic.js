const aboutBtn = document.getElementById("about");
const testimonialsBtn = document.getElementById("testimonials");
const contactBtn = document.getElementById("contact");
const closeBtn = document.querySelectorAll(".closeButton");
const aboutOverlay = document.getElementById("aboutOverlay");
const testimonialsOverlay = document.getElementById("testimonialsOverlay");
const contactOverlay = document.getElementById("contactOverlay");
const pauseBtn = document.getElementById("pauseBtn");
const eyeBtn = document.getElementById("eyeBtn");
const fullScreenBtn = document.getElementById("fullsButton");
const progressBar = document.getElementById("progressBar");
const imgDes = document.getElementById("imgDes");

const dot0 = document.getElementById("dot0");
const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");
const dot4 = document.getElementById("dot4");
const dot5 = document.getElementById("dot5");
const dot6 = document.getElementById("dot6");
const dot7 = document.getElementById("dot7");
const dot8 = document.getElementById("dot8");

const bg = document.getElementById("bg");
const bar= document.getElementById("bar");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const slowBtn = document.getElementById("slowBtn");
const fastBtn = document.getElementById("fastBtn");
const timerShow = document.getElementById("timer");

const imgDes0 = document.getElementById("imgDes0");
const imgDes1 = document.getElementById("imgDes1");
const imgDes2 = document.getElementById("imgDes2");
const imgDes3 = document.getElementById("imgDes3");
const imgDes4 = document.getElementById("imgDes4");
const imgDes5 = document.getElementById("imgDes5");
const imgDes6 = document.getElementById("imgDes6");
const imgDes7 = document.getElementById("imgDes7");
const imgDes8 = document.getElementById("imgDes8");
let change = document.getElementsByClassName("change");
const pauseSvg = document.getElementById("pauseSvg");
const playSvg = document.getElementById("playSvg");
const dotContainer =document.getElementById("dotsContainer");


let currentIndex = 0;
let timerID;
let duration = 5;
let prevIndex = currentIndex;
let flag = 0;

const backgrounds = [
  "img/mountain-dreams.jpg",
  "img/desert-vastness.jpg",
  "img/forest-whispers.jpg",
  "img/golden-hour.jpg",
  "img/ocean-serenity.jpg",
  "img/spring-bloom.jpg",
  "img/summit-glory.jpg",
  "img/waterfall-majesty.jpg",
  "img/wild-encounters.jpg",
];

function nextBackground() {
  currentIndex = (currentIndex + 1) % backgrounds.length;
  updateBackground();
}

function prevBackground() {
  currentIndex = (currentIndex - 1 + backgrounds.length) % backgrounds.length;
  updateBackground();
}

function updateBackground() {
  bg.style.backgroundImage = `linear-gradient( to bottom, #00000080 0%, #ffffff00 50%, #00000080 100% ),url("${backgrounds[currentIndex]}")`;

  change[currentIndex].classList.remove('hidden');

  if(currentIndex != prevIndex){
      change[prevIndex].classList.add('hidden');
  }

  prevIndex = currentIndex;

}

function startTimer() {
  clearInterval(timerID);
  timerID = setInterval(nextBackground, duration * 1000);
  timerShow.textContent = duration + "s";
  console.log(duration);
}

nextBtn.addEventListener("click", () => {
  nextBackground();
  startTimer();
});

prevBtn.addEventListener("click", () => {
  prevBackground();
  startTimer();
});

document.addEventListener("DOMContentLoaded", () => {
  updateBackground();
  startTimer();
  imgDesUpdater();
});

pauseBtn.addEventListener("click", () => {
  pausebg();
})

function pausebg() {
  if(flag == 0){
      clearInterval(timerID);
      pauseSvg.classList.add('hidden')
      playSvg.classList.remove('hidden');
      flag = 1;
  }

  else if(flag == 1){
      startTimer();
      pauseSvg.classList.remove('hidden')
      playSvg.classList.add('hidden');
      flag = 0;
  }
}

function increaseTimer() {
  if (duration < 9) duration++;
  startTimer();
}

function decreaseTimer() {
  if (duration > 1) duration--;
  startTimer();
}

slowBtn.addEventListener("click", () => {
  decreaseTimer();
});

fastBtn.addEventListener("click", () => {
  increaseTimer();
});


dot0.addEventListener("click", () => {
  currentIndex = 0;
  startTimer();
  updateBackground()
})

dot1.addEventListener("click", () => {
  currentIndex = 1;
  startTimer();
  updateBackground()
})

dot2.addEventListener("click", () => {
  currentIndex = 2;
  startTimer();
  updateBackground()
})

dot3.addEventListener("click", () => {
  currentIndex = 3;
  startTimer();
  updateBackground()
})

dot4.addEventListener("click", () => {
  currentIndex = 4;
  startTimer();
  updateBackground()
})

dot5.addEventListener("click", () => {
  currentIndex = 5;
  startTimer();
  updateBackground()
})

dot6.addEventListener("click", () => {
  currentIndex = 6;
  startTimer();
  updateBackground()
})

dot7.addEventListener("click", () => {
  currentIndex = 7;
  startTimer();
  updateBackground()
})

dot8.addEventListener("click", () => {
  currentIndex = 8;
  startTimer();
  updateBackground()
})


document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;

  bg.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
});

aboutBtn.addEventListener("click", () => {
  aboutOverlay.classList.remove("hidden");
  aboutOverlay.classList.add("flex");
  blurbackground();


})

testimonialsBtn.addEventListener("click", () => {
  testimonialsOverlay.classList.remove("hidden");
  testimonialsOverlay.classList.add("flex");
  blurbackground();



})


contactBtn.addEventListener("click", () => {
  contactOverlay.classList.remove("hidden");
  contactOverlay.classList.add("flex");
  blurbackground();

})

closeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {


    aboutOverlay.classList.remove("flex");
    aboutOverlay.classList.add("hidden");

    testimonialsOverlay.classList.remove("flex");
    testimonialsOverlay.classList.add("hidden");

    contactOverlay.classList.remove("flex");
    contactOverlay.classList.add("hidden");

    unblurBackground();

  })})


fullScreenBtn.addEventListener("click", () => {
  if(!document.fullscreenElement){
    document.documentElement.requestFullscreen();
  }

  else if(document.exitFullscreen){
    document.exitFullscreen();
  }
})

eyeBtn.addEventListener("click", () => {
    if(bar.classList.contains("flex")) {

      bar.classList.remove("flex");
      bar.classList.add("hidden");

      nextBtn.classList.remove("flex");
      nextBtn.classList.add("hidden");

      prevBtn.classList.remove("flex");
      prevBtn.classList.add("hidden");

      pauseBtn.classList.remove("flex");
      pauseBtn.classList.add("hidden");

      timerShow.classList.remove("flex");
      timerShow.classList.add("hidden");

      slowBtn.classList.remove("flex");
      slowBtn.classList.add("hidden");

      fastBtn.classList.remove("flex");
      fastBtn.classList.add("hidden");

      dotContainer.classList.remove("flex");
      dotContainer.classList.add("hidden");

      imgDes.classList.remove("flex");
      imgDes.classList.add("hidden");

      progressBar.classList.add("hidden");


    }

    else{

      bar.classList.remove("hidden");
      bar.classList.add("flex");

      nextBtn.classList.remove("hidden");
      nextBtn.classList.add("flex");

      prevBtn.classList.remove("hidden");
      prevBtn.classList.add("flex");

      pauseBtn.classList.remove("hidden");
      pauseBtn.classList.add("flex");

      timerShow.classList.remove("hidden");
      timerShow.classList.add("flex");

      slowBtn.classList.remove("hidden");
      slowBtn.classList.add("flex");

      fastBtn.classList.remove("hidden");
      fastBtn.classList.add("flex");

      dotContainer.classList.remove("hidden");
      dotContainer.classList.add("flex");

      progressBar.classList.remove("hidden");

      imgDes.classList.remove("hidden");
      imgDes.classList.add("flex");

    }
})

function blurbackground() {
  bar.classList.add("blur-md");
  bar.style.pointerEvents = "none";

  bg.style.filter = "blur(10px)";

  nextBtn.classList.add("blur-md");
  nextBtn.style.pointerEvents = "none";

  prevBtn.classList.add("blur-md");
  prevBtn.style.pointerEvents = "none";

  pauseBtn.classList.add("blur-md");
  pauseBtn.style.pointerEvents = "none";

  slowBtn.classList.add("blur-md");
  slowBtn.style.pointerEvents = "none";

  fastBtn.classList.add("blur-md");
  fastBtn.style.pointerEvents = "none";

  dotContainer.classList.add("blur-md");
  dotContainer.style.pointerEvents = "none";

  timerShow.classList.add("blur-md");

  progressBar.classList.add("blur-md");

  imgDes.classList.add("blur-md");

}

function unblurBackground() {

  bar.classList.remove("blur-md");
  bar.style.pointerEvents = "auto";

  bg.style.filter = "blur(0px)";

  nextBtn.classList.remove("blur-md");
  nextBtn.style.pointerEvents = "auto";

  prevBtn.classList.remove("blur-md");
  prevBtn.style.pointerEvents = "auto";

  pauseBtn.classList.remove("blur-md");
  pauseBtn.style.pointerEvents = "auto";

  slowBtn.classList.remove("blur-md");
  slowBtn.style.pointerEvents = "auto";

  dotContainer.classList.remove("blur-md");
  dotContainer.style.pointerEvents = "auto";

  fastBtn.classList.remove("blur-md");

  fastBtn.style.pointerEvents = "auto";

  timerShow.classList.remove("blur-md");

  progressBar.classList.remove("blur-md");

  imgDes.classList.remove("blur-md");

}