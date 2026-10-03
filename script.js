document.getElementById("year").textContent = new Date().getFullYear();

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 24) {
    header.style.borderColor = "rgba(255,145,76,.18)";
  } else {
    header.style.borderColor = "rgba(255,255,255,.08)";
  }
}, { passive: true });
