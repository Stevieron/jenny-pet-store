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

menuBtn.addEventListener("click", () => {
  links.classList.toggle("open");
  hamburger.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  const isClickInsideNav =
    hamburger.contains(e.target) || links.contains(e.target);

  if (!isClickInsideNav) {
    links.classList.remove("open");
    hamburger.classList.remove("open");
  }
});

const heroText = document.getElementById("typewriter");
const phrases = ["Adopt at Jenny.", "Find a furry friend.", "Give it a home."];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loopTyping() {
  heroText.textContent = currentPhrase.join("");

  if (i < phrases.length) {
    if (!isDeleting && j < phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      heroText.textContent = currentPhrase.join("");
    } else if (isDeleting && j > 0) {
      currentPhrase.pop();
      j--;
      heroText.textContent = currentPhrase.join("");
    }

    if (!isDeleting && j === phrases[i].length) {
      isEnd = true;
      isDeleting = true;
      setTimeout(loopTyping, 1400);
      return;
    }

    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % phrases.length;
    }
  }

  const speed = isEnd ? 100 : isDeleting ? 20 : 100;
  setTimeout(loopTyping, speed);
}

loopTyping();

const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
