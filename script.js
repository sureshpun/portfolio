// ------------------------------
// THEME TOGGLE
// ------------------------------
const toggle = document.getElementById("themeToggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.className = savedTheme;
  toggle.textContent = savedTheme === "dark" ? "🌙" : "☀️";
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  toggle.textContent = isDark ? "🌙" : "☀️";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// ------------------------------
// DISPLAY TODAY'S DATE
// ------------------------------
const dateElement = document.querySelector(".date");
if (dateElement) {
  const today = new Date();
  dateElement.textContent = `Today's date: ${today.toDateString()}`;
}

// ------------------------------
// DYNAMIC GREETING
// ------------------------------
const greeting = document.getElementById("greeting");
if (greeting) {
  const now = new Date();
  const hour = now.getHours();

  if (hour < 12) {
    greeting.innerHTML = "☀️ Good Morning! <br> I'm Suresh Pun";
  } else if (hour < 18) {
    greeting.innerHTML = "🌤️ Good Afternoon! <br> I'm Suresh Pun";
  } else {
    greeting.innerHTML = "🌙 Good Evening! <br> I'm Suresh Pun";
  }
}

// ------------------------------
// SCROLL-TO-TOP BUTTON
// ------------------------------
const topBtn = document.getElementById("topBtn");

if (topBtn) {
  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  };

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ------------------------------
// SCROLL ANIMATIONS
// ------------------------------
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      // Add stagger effect if multiple items
      entry.target.style.animationDelay = `${index * 0.1}s`;
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections, cards, and list items
document.querySelectorAll('section, .card, li').forEach((el) => {
  el.style.opacity = '0'; // Initial state
  observer.observe(el);
});
