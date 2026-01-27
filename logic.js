const aboutBtn = document.getElementById("about");
const testimonialsBtn = document.getElementById("testimonials");
const aboutOverlay = document.getElementById("aboutOverlay");
const testimonialsOverlay = document.getElementById("testimonialsOverlay");
const closeBtn = document.querySelector(".closeButton");
const contactBtn = document.getElementById("contact");
const contactOverlay = document.getElementById("contactOverlay");
const bg= document.querySelector(".bg");

document.addEventListener("mousemove", (e) =>{
  const x = (e.clientX / window.innerWidth - 0.5) * 8;
  const y = (e.clientY / window.innerHeight - 0.5) * 8;

  bg.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
});

aboutBtn.addEventListener("click", () => {
  aboutOverlay.style.display = "flex";
});

testimonialsBtn.addEventListener("click", () => {
  testimonialsOverlay.style.display = "flex";
});

contactBtn.addEventListener("click", () => {
  contactOverlay.style.display = "flex";
});


closeBtn.addEventListener("click", () => {

  aboutOverlay.style.display = "none";

});