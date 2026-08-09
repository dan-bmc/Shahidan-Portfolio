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
  const [name, email, subject, message] = this.querySelectorAll('input, textarea');
  btn.textContent = "Sending...";
  btn.disabled = true;

  emailjs.send('service_pw8je4i', 'template_c4u5jv3', {
    from_name: name.value,
    from_email: email.value,
    subject: subject.value,
    message: message.value
  }).then(() => {
    btn.textContent = "Message Sent! ✓";
    btn.style.background = "#16a34a";
    btn.style.borderColor = "#16a34a";
    this.reset();
    setTimeout(() => {
      btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
      btn.style.background = "";
      btn.style.borderColor = "";
      btn.disabled = false;
    }, 3000);
  }).catch(() => {
    btn.textContent = "Failed. Try again.";
    btn.style.background = "#dc2626";
    setTimeout(() => {
      btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
      btn.style.background = "";
      btn.disabled = false;
    }, 3000);
  });
});

// Modal
let currentSlide = 0;
const totalSlides = 7;

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
  document.querySelectorAll('#mealModal .slide').forEach((s, i) => s.classList.toggle('active', i === currentSlide));
  document.getElementById('slideCount').textContent = `${currentSlide + 1} / ${totalSlides}`;
}
function nextSlide() { currentSlide = (currentSlide + 1) % totalSlides; updateSlide(); }
function prevSlide() { currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; updateSlide(); }

document.getElementById('mealModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// SIM Card Modal
let currentSimSlide = 0;
const totalSimSlides = 4;

function openSimModal() {
  currentSimSlide = 0;
  updateSimSlide();
  document.getElementById('simModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeSimModal() {
  document.getElementById('simModal').classList.remove('open');
  document.body.style.overflow = '';
}
function updateSimSlide() {
  document.querySelectorAll('#simSlides .slide').forEach((s, i) => s.classList.toggle('active', i === currentSimSlide));
  document.getElementById('simSlideCount').textContent = `${currentSimSlide + 1} / ${totalSimSlides}`;
}
function nextSimSlide() { currentSimSlide = (currentSimSlide + 1) % totalSimSlides; updateSimSlide(); }
function prevSimSlide() { currentSimSlide = (currentSimSlide - 1 + totalSimSlides) % totalSimSlides; updateSimSlide(); }

document.getElementById('simModal').addEventListener('click', function(e) {
  if (e.target === this) closeSimModal();
});

// Asset Management Modal
let currentAssetSlide = 0;
const totalAssetSlides = 6;

function openAssetModal() {
  currentAssetSlide = 0;
  updateAssetSlide();
  document.getElementById('assetModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeAssetModal() {
  document.getElementById('assetModal').classList.remove('open');
  document.body.style.overflow = '';
}
function updateAssetSlide() {
  document.querySelectorAll('#assetSlides .slide').forEach((s, i) => s.classList.toggle('active', i === currentAssetSlide));
  document.getElementById('assetSlideCount').textContent = `${currentAssetSlide + 1} / ${totalAssetSlides}`;
}
function nextAssetSlide() { currentAssetSlide = (currentAssetSlide + 1) % totalAssetSlides; updateAssetSlide(); }
function prevAssetSlide() { currentAssetSlide = (currentAssetSlide - 1 + totalAssetSlides) % totalAssetSlides; updateAssetSlide(); }

document.getElementById('assetModal').addEventListener('click', function(e) {
  if (e.target === this) closeAssetModal();
});

// Display Order Modal
let currentDisplaySlide = 0;
const totalDisplaySlides = 3;

function openDisplayModal() {
  currentDisplaySlide = 0;
  updateDisplaySlide();
  document.getElementById('displayModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeDisplayModal() {
  document.getElementById('displayModal').classList.remove('open');
  document.body.style.overflow = '';
}
function updateDisplaySlide() {
  document.querySelectorAll('#displaySlides .slide').forEach((s, i) => s.classList.toggle('active', i === currentDisplaySlide));
  document.getElementById('displaySlideCount').textContent = `${currentDisplaySlide + 1} / ${totalDisplaySlides}`;
}
function nextDisplaySlide() { currentDisplaySlide = (currentDisplaySlide + 1) % totalDisplaySlides; updateDisplaySlide(); }
function prevDisplaySlide() { currentDisplaySlide = (currentDisplaySlide - 1 + totalDisplaySlides) % totalDisplaySlides; updateDisplaySlide(); }

document.getElementById('displayModal').addEventListener('click', function(e) {
  if (e.target === this) closeDisplayModal();
});

// Ticketing Modal
let currentTicketingSlide = 0;
const totalTicketingSlides = 6;

function openTicketingModal() {
  currentTicketingSlide = 0;
  updateTicketingSlide();
  document.getElementById('ticketingModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeTicketingModal() {
  document.getElementById('ticketingModal').classList.remove('open');
  document.body.style.overflow = '';
}
function updateTicketingSlide() {
  document.querySelectorAll('#ticketingSlides .slide').forEach((s, i) => s.classList.toggle('active', i === currentTicketingSlide));
  document.getElementById('ticketingSlideCount').textContent = `${currentTicketingSlide + 1} / ${totalTicketingSlides}`;
}
function nextTicketingSlide() { currentTicketingSlide = (currentTicketingSlide + 1) % totalTicketingSlides; updateTicketingSlide(); }
function prevTicketingSlide() { currentTicketingSlide = (currentTicketingSlide - 1 + totalTicketingSlides) % totalTicketingSlides; updateTicketingSlide(); }

document.getElementById('ticketingModal').addEventListener('click', function(e) {
  if (e.target === this) closeTicketingModal();
});

// OT Management Modal
let currentOTManagementSlide = 0;
const totalOTManagementSlides = 1;

function openOTManagementModal() {
  currentOTManagementSlide = 0;
  updateOTManagementSlide();
  document.getElementById('otManagementModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeOTManagementModal() {
  document.getElementById('otManagementModal').classList.remove('open');
  document.body.style.overflow = '';
}
function updateOTManagementSlide() {
  document.querySelectorAll('#otManagementSlides .slide').forEach((s, i) => s.classList.toggle('active', i === currentOTManagementSlide));
  document.getElementById('otManagementSlideCount').textContent = `${currentOTManagementSlide + 1} / ${totalOTManagementSlides}`;
}
function nextOTManagementSlide() { currentOTManagementSlide = (currentOTManagementSlide + 1) % totalOTManagementSlides; updateOTManagementSlide(); }
function prevOTManagementSlide() { currentOTManagementSlide = (currentOTManagementSlide - 1 + totalOTManagementSlides) % totalOTManagementSlides; updateOTManagementSlide(); }

document.getElementById('otManagementModal').addEventListener('click', function(e) {
  if (e.target === this) closeOTManagementModal();
});

// OT Display Modal
let currentOTDisplaySlide = 0;
const totalOTDisplaySlides = 1;

function openOTDisplayModal() {
  currentOTDisplaySlide = 0;
  updateOTDisplaySlide();
  document.getElementById('otDisplayModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeOTDisplayModal() {
  document.getElementById('otDisplayModal').classList.remove('open');
  document.body.style.overflow = '';
}
function updateOTDisplaySlide() {
  document.querySelectorAll('#otDisplaySlides .slide').forEach((s, i) => s.classList.toggle('active', i === currentOTDisplaySlide));
  document.getElementById('otDisplaySlideCount').textContent = `${currentOTDisplaySlide + 1} / ${totalOTDisplaySlides}`;
}
function nextOTDisplaySlide() { currentOTDisplaySlide = (currentOTDisplaySlide + 1) % totalOTDisplaySlides; updateOTDisplaySlide(); }
function prevOTDisplaySlide() { currentOTDisplaySlide = (currentOTDisplaySlide - 1 + totalOTDisplaySlides) % totalOTDisplaySlides; updateOTDisplaySlide(); }

document.getElementById('otDisplayModal').addEventListener('click', function(e) {
  if (e.target === this) closeOTDisplayModal();
});
