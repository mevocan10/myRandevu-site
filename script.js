const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const header = document.querySelector(".site-header");

if (header) {
  window.addEventListener("scroll", () => {
    header.style.borderColor = window.scrollY > 24 ? "rgba(255,102,0,.22)" : "rgba(255,255,255,.08)";
  }, { passive: true });
}
