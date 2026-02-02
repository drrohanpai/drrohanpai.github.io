// Slide navigation
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

document.addEventListener("click", () => {
  if (currentSlide < slides.length - 1) {
    slides[currentSlide].classList.remove("active");
    currentSlide++;
    slides[currentSlide].classList.add("active");
  }
});

// No button runs away
const noBtn = document.getElementById("no");
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// Yes button reaction
document.getElementById("yes").addEventListener("click", (e) => {
  e.stopPropagation();
  document.getElementById("response").innerText =
    "YAY!!! 💕 I knew you’d say yes 😘";
});
