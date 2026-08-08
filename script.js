// Typewriter
const phrases = ["Web Developer.", "Desktop App Developer.", "Electron.js Expert.", "Node.js Developer."];
let pi = 0, ci = 0, deleting = false;
const el = document.getElementById("typewriter");

function type() {
  const current = phrases[pi];
  el.textContent = deleting ? current.substring(0, ci--) : current.substring(0, ci++);
  if (!deleting && ci > current.length) { deleting = true; setTimeout(type, 1500); return; }
  if (deleting && ci < 0) { deleting = false; pi = (pi + 1) % phrases.length; }
  setTimeout(type, deleting ? 60 : 100);
}
type();

// Hamburger
document.getElementById("hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("open");
});

// Close nav on link click
document.querySelectorAll(".nav-links a").forEach(a => {
  a.addEventListener("click", () => document.querySelector(".nav-links").classList.remove("open"));
});

// Active nav highlight on scroll
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY + 100;
  sections.forEach(s => {
    const link = document.querySelector(`.nav-links a[href="#${s.id}"]`);
    if (link) link.style.color = scrollY >= s.offsetTop && scrollY < s.offsetTop + s.offsetHeight ? "var(--accent2)" : "";
  });
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); } });
}, { threshold: 0.1 });

document.querySelectorAll(".service-card, .project-card, .skill-item, .about-grid, .contact-grid").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  observer.observe(el);
});

document.addEventListener("animationend", () => {}, false);

// Add visible class style
const style = document.createElement("style");
style.textContent = ".visible { opacity: 1 !important; transform: translateY(0) !important; }";
document.head.appendChild(style);

// Contact form
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const btn = this.querySelector("button");
  btn.textContent = "Message Sent! ✓";
  btn.style.background = "#16a34a";
  btn.style.borderColor = "#16a34a";
  setTimeout(() => {
    btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
    btn.style.background = "";
    btn.style.borderColor = "";
    this.reset();
  }, 3000);
});

// Modal
let currentSlide = 0;
const totalSlides = 8;

function openModal(type) {
  currentSlide = 0;
  updateSlide();
  document.getElementById('mealModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('mealModal').classList.remove('open');
  document.body.style.overflow = '';
}
function updateSlide() {
  document.querySelectorAll('.slide').forEach((s, i) => s.classList.toggle('active', i === currentSlide));
  document.getElementById('slideCount').textContent = `${currentSlide + 1} / ${totalSlides}`;
}
function nextSlide() { currentSlide = (currentSlide + 1) % totalSlides; updateSlide(); }
function prevSlide() { currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; updateSlide(); }

document.getElementById('mealModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
