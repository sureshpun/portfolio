// your code goes here
// 🕒 Display today's date
const dateElement = document.querySelector('.date');
const today = new Date();
dateElement.textContent = `Today's date: ${today.toDateString()}`;

// 👋 Dynamic greeting
const greeting = document.getElementById('greeting');
const hour = today.getHours();

if (hour < 12) {
  greeting.textContent = "☀️ Good Morning! I'm Suresh Pun";
} else if (hour < 18) {
  greeting.textContent = "🌤️ Good Afternoon! I'm Suresh Pun";
} else {
  greeting.textContent = "🌙 Good Evening! I'm Suresh Pun";
}

// ⬆️ Scroll to top button
const topBtn = document.getElementById("topBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
            