// ===== PERMANENT PROFILE PHOTO - uses real jr.jpg/png file =====
const avatar = document.getElementById("avatar");
const input = document.getElementById("photoInput");

function showPhoto(src) {
  avatar.innerHTML = '<img src="' + src + '" alt="Norleo Jr. A. Diaz" onerror="this.onerror=null;this.src=\'jr.png\'">';
  avatar.appendChild(input);
}

// ALWAYS load the real file from your repo - this is permanent for everyone
showPhoto("jr.jpg");

input.addEventListener("change", () => {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    showPhoto(reader.result); // preview only, not saved to localStorage anymore
  };
  reader.readAsDataURL(file);
});

// ===== 1. Typing effect (hero) =====
const roles = ["Web Developer", "React Enthusiast", "Tailwind & Bootstrap Fan", "Lifelong Learner"];
const typed = document.getElementById("typed");
let r = 0, c = 0, deleting = false;

function type() {
  const word = roles[r];
  typed.textContent = word.slice(0, c);
  if (!deleting && c < word.length) { c++; setTimeout(type, 90); }
  else if (!deleting) { deleting = true; setTimeout(type, 1400); }
  else if (c > 0) { c--; setTimeout(type, 45); }
  else { deleting = false; r = (r + 1) % roles.length; setTimeout(type, 300); }
}
type();

// ===== 2. Scroll reveal for sections =====
const sections = document.querySelectorAll("section");
sections.forEach(sec => sec.classList.add("reveal"));
const revealer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("show"); revealer.unobserve(e.target); } });
}, { threshold: 0.15 });
sections.forEach(sec => revealer.observe(sec));

// ===== 3. Skill bars fill up when you scroll to them =====
const bars = document.querySelectorAll(".bar > div");
bars.forEach(b => { b.dataset.w = b.style.width; b.style.width = "0"; });
const barWatcher = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.style.width = e.target.dataset.w; barWatcher.unobserve(e.target); } });
}, { threshold: 0.5 });
bars.forEach(b => barWatcher.observe(b));

// ===== 4. Back-to-top button =====
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => toTop.classList.toggle("visible", window.scrollY > 400));
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// ===== 5. Auto-update footer year =====
document.getElementById("year").textContent = new Date().getFullYear();