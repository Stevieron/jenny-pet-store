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

const heroText = document.getElementById("typewriter");
const phrases = ["Adopt at Jenny.", "Find a furry friend.", "Give it a home."];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

// Try typing each phrase at a time
function loopTyping() {
  heroText.textContent = currentPhrase.join("");

  // To type letters
  if (i < phrases.length) {
    if (!isDeleting && j < phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      heroText.textContent = currentPhrase.join("");
    } else if (isDeleting && j > 0) {
      //if there is at least one more letter left to delete
      currentPhrase.pop();
      j--;
      heroText.textContent = currentPhrase.join("");
    }

    // Pause 1.2secs at the end of each phrase & re-invoke after every 1.2secs
    if (!isDeleting && j === phrases[i].length) {
      isEnd = true;
      isDeleting = true;
      setTimeout(loopTyping, 1400);
      return;
    }

    // Move to the next phrase after del last char(j) of current phrase[i]
    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % phrases.length;
    }
  }

  const speed = isEnd ? 100 : isDeleting ? 20 : 100;
  setTimeout(loopTyping, speed); //Sets typing and deletion speed
}

loopTyping();
