const aboutBtn = document.getElementById("about");
const testimonialsBtn = document.getElementById("testimonials");
const contactBtn = document.getElementById("contact");
const closeBtn = document.querySelectorAll(".closeButton");
const aboutOverlay = document.getElementById("aboutOverlay");
const testimonialsOverlay = document.getElementById("testimonialsOverlay");
const contactOverlay = document.getElementById("contactOverlay");
const bg = document.querySelector(".bg");
const bar= document.querySelector(".bar");
const fullScreenBtn = document.getElementById("fullsButton");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pauseBtn = document.getElementById("pauseBtn");
const navigationBtns = document.getElementById("navigationBtns");
const slowBtn = document.getElementById("slowBtn");
const fastBtn = document.getElementById("fastBtn");
const progressBar = document.getElementById("progressBar");
const timerBtn = document.getElementById("timer");
const eyeBtn = document.getElementById("eyeBtn");



document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 8;
  const y = (e.clientY / window.innerHeight - 0.5) * 8;

  bg.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
});

aboutBtn.addEventListener("click", () => {
  aboutOverlay.style.display = "flex";
  bg.style.filter = `brightness(0.7) blur(12px)`;
  bar.style.filter = `brightness(0.7) blur(12px)`;
  bar.style.pointerEvents = "none";
  prevBtn.style.pointerEvents = "none";
  prevBtn.style.filter = "blur(12px)";
  nextBtn.style.pointerEvents = "none";
  nextBtn.style.filter = "blur(12px)";
  pauseBtn.style.pointerEvents = "none";
  pauseBtn.style.filter = "blur(12px)";
  slowBtn.style.pointerEvents = "none";
  slowBtn.style.filter = "blur(12px)";
  fastBtn.style.pointerEvents = "none";
  fastBtn.style.filter = "blur(12px)";
  progressBar.style.filter = "blur(12px)";
  timerBtn.style.filter = "blur(12px)";

 

});

testimonialsBtn.addEventListener("click", () => {
  testimonialsOverlay.style.display = "flex";
  bg.style.filter = `brightness(0.7) blur(12px)`;
  bar.style.filter = `brightness(0.7) blur(12px)`;
  bar.style.pointerEvents = "none";
  prevBtn.style.pointerEvents = "none";
  prevBtn.style.filter = "blur(12px)";
  nextBtn.style.pointerEvents = "none";
  nextBtn.style.filter = "blur(12px)";
  pauseBtn.style.pointerEvents = "none";
  pauseBtn.style.filter = "blur(12px)";
  slowBtn.style.pointerEvents = "none";
  slowBtn.style.filter = "blur(12px)";
  fastBtn.style.pointerEvents = "none";
  fastBtn.style.filter = "blur(12px)";
  progressBar.style.filter = "blur(12px)";
  timerBtn.style.filter = "blur(12px)";
  
  
});

contactBtn.addEventListener("click", () => {
  contactOverlay.style.display = "flex";
  bg.style.filter = `brightness(0.7) blur(12px)`;
  bar.style.filter = `brightness(0.7) blur(12px)`;
  bar.style.pointerEvents = "none";
  prevBtn.style.pointerEvents = "none";
  prevBtn.style.filter = "blur(12px)";
  nextBtn.style.pointerEvents = "none";
  nextBtn.style.filter = "blur(12px)";
  pauseBtn.style.pointerEvents = "none";
  pauseBtn.style.filter = "blur(12px)";
  slowBtn.style.pointerEvents = "none";
  slowBtn.style.filter = "blur(12px)";
  fastBtn.style.pointerEvents = "none";
  fastBtn.style.filter = "blur(12px)";
  progressBar.style.filter = "blur(12px)";
  timerBtn.style.filter = "blur(12px)";

});

closeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {

    aboutOverlay.style.display = "none";
    testimonialsOverlay.style.display = "none";
    contactOverlay.style.display = "none";

    bg.style.filter = `brightness(0.7) blur(0px)`;

    bar.style.filter = `blur(0px)`;
    bar.style.pointerEvents = "auto";

    prevBtn.style.pointerEvents = "auto";
    prevBtn.style.filter = "blur(0px)";

    nextBtn.style.pointerEvents = "auto";
    nextBtn.style.filter = "blur(0px)";
    pauseBtn.style.pointerEvents = "auto";
    pauseBtn.style.filter = "blur(0px)";

    navigationBtns.style.filter = "blur(0px)";

    progressBar.style.filter = "blur(0px)";

    slowBtn.style.pointerEvents = "auto";
    slowBtn.style.filter = "blur(0px)";
    fastBtn.style.pointerEvents = "auto";
    fastBtn.style.filter = "blur(0px)";

    timerBtn.style.filter = "blur(0px)";


  });
});

fullScreenBtn.addEventListener("click", () => {
  if(!document.fullscreenElement){
    document.documentElement.requestFullscreen();
  }

  else if(document.exitFullscreen){
    document.exitFullscreen();
  }

})

eyeBtn.addEventListener("click", () => {
  
  if(bar.style.display == "flex"){
    bar.style.display = "none";
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    navigationBtns.style.display = "none";
    pauseBtn.style.display = "none";
    progressBar.style.display = "none";
  }

  else{
    bar.style.display = "flex";
    prevBtn.style.display = "flex";
    nextBtn.style.display = "flex";
    navigationBtns.style.display = "flex";
    pauseBtn.style.display = "flex";
    progressBar.style.display = "block";
  }

})






