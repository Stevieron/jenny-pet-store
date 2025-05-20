const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".nav-links");
const menuBtn = document.querySelector(".hamburger");
const heroSection = document.querySelector(".headline");
const header = document.querySelector(".nav-bar");

// Smooth scroll of nav links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    links.classList.toggle("open");
    hamburger.classList.toggle("open");
  });
});

// Toggle class for menu dropdown
menuBtn.addEventListener("click", () => {
  links.classList.toggle("open");
  hamburger.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  const isClickInsideNav =
    hamburger.contains(e.target) || links.contains(e.target);
  // Areas outside navLinks and menu icon close menu dropdown
  if (!isClickInsideNav) {
    links.classList.remove("open");
    hamburger.classList.remove("open");
  }
});
