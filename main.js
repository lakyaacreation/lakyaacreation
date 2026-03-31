// ============================================================
// LAKYAA CREATION & ACADEMY — MAIN JS
// ============================================================

// ---- HERO SLIDER ----
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('slideDots');
let autoSlide;

function initDots() {
  if (!dotsContainer) return;
  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });
}

function goToSlide(n) {
  slides[currentSlide].classList.remove('active');
  document.querySelectorAll('.dot')[currentSlide]?.classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  document.querySelectorAll('.dot')[currentSlide]?.classList.add('active');
}

function changeSlide(dir) {
  goToSlide(currentSlide + dir);
  resetAuto();
}

function resetAuto() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => goToSlide(currentSlide + 1), 5000);
}

if (slides.length) {
  initDots();
  autoSlide = setInterval(() => goToSlide(currentSlide + 1), 5000);
}

// ---- TESTIMONIAL SLIDER ----
let testIndex = 0;
const testSlider = document.getElementById('testSlider');

function getTestCards() {
  return testSlider ? Array.from(testSlider.querySelectorAll('.testimonial-card')) : [];
}

function updateTestSlider() {
  if (!testSlider) return;
  const cards = getTestCards();
  if (!cards.length) return;
  const card = cards[0];
  const style = window.getComputedStyle(testSlider);
  const gap = parseFloat(style.gap) || 24;
  const cardWidth = card.getBoundingClientRect().width + gap;
  testSlider.style.transform = `translateX(-${testIndex * cardWidth}px)`;
}

function nextTest() {
  const cards = getTestCards();
  if (!cards.length) return;
  const visible = window.innerWidth < 640 ? 1 : 2;
  const maxIndex = cards.length - visible;
  testIndex = testIndex >= maxIndex ? 0 : testIndex + 1;
  updateTestSlider();
}

function prevTest() {
  const cards = getTestCards();
  if (!cards.length) return;
  const visible = window.innerWidth < 640 ? 1 : 2;
  const maxIndex = cards.length - visible;
  testIndex = testIndex <= 0 ? maxIndex : testIndex - 1;
  updateTestSlider();
}

// ---- GALLERY HORIZONTAL SCROLL ----
const galleryTrack = document.getElementById('galleryTrack');
const CARD_WIDTH = 312; // 300px card + 12px gap

function scrollGallery(dir) {
  if (!galleryTrack) return;
  galleryTrack.scrollBy({ left: dir * CARD_WIDTH * 2, behavior: 'smooth' });
}

// Drag to scroll on desktop
if (galleryTrack) {
  let isDragging = false, startX = 0, scrollStart = 0;
  galleryTrack.addEventListener('mousedown', e => {
    isDragging = true;
    startX = e.pageX;
    scrollStart = galleryTrack.scrollLeft;
    galleryTrack.style.userSelect = 'none';
  });
  window.addEventListener('mousemove', e => {
    if (!isDragging) return;
    galleryTrack.scrollLeft = scrollStart - (e.pageX - startX);
  });
  window.addEventListener('mouseup', () => {
    isDragging = false;
    galleryTrack.style.userSelect = '';
  });
}


function toggleMenu() {
  const nav = document.getElementById('navLinks');
  if (nav) nav.classList.toggle('open');
}

// Close nav when link clicked on mobile
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks')?.classList.remove('open');
  });
});

// ---- NAVBAR SCROLL EFFECT ----
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (navbar) {
    navbar.style.boxShadow = window.scrollY > 60
      ? '0 4px 30px rgba(0,0,0,0.4)'
      : '0 2px 20px rgba(0,0,0,0.3)';
  }
});

// ---- STAR RATING ----
let currentRating = 0;
const ratingLabels = ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent!'];

function setRating(val) {
  currentRating = val;
  const stars = document.querySelectorAll('.star');
  const label = document.getElementById('ratingLabel');
  const input = document.getElementById('fb-rating');
  stars.forEach((s, i) => {
    s.classList.toggle('active', i < val);
    s.classList.toggle('glow', i === val - 1);
  });
  if (label) label.textContent = ratingLabels[val];
  if (input) input.value = val;
}

// Hover effect on stars
document.querySelectorAll('.star').forEach(star => {
  star.addEventListener('mouseenter', () => {
    const val = parseInt(star.dataset.val);
    document.querySelectorAll('.star').forEach((s, i) => {
      s.style.color = i < val ? 'var(--gold-light)' : '';
    });
  });
  star.addEventListener('mouseleave', () => {
    document.querySelectorAll('.star').forEach((s, i) => {
      s.style.color = '';
    });
  });
});

// ---- FILE UPLOAD LABEL ----
function updateFileName(input) {
  const label = document.getElementById('file-name-text');
  if (label && input.files.length > 0) {
    label.textContent = input.files[0].name;
  }
}

// ---- FEEDBACK FORM SUBMIT ----
const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbyOU45K7Ptalf-W0yWuaS46G0CfNkkHQqjPeRhokhOeWU5ldC3At9aH9O_CJW9T-7qV/exec';

async function submitFeedback() {
  const name    = document.getElementById('fb-name')?.value.trim();
  const phone   = document.getElementById('fb-phone')?.value.trim();
  const email   = document.getElementById('fb-email')?.value.trim();
  const service = document.getElementById('fb-service')?.value;
  const date    = document.getElementById('fb-date')?.value;
  const rating  = document.getElementById('fb-rating')?.value;
  const msg     = document.getElementById('fb-msg')?.value.trim();
  const success = document.getElementById('formSuccess');
  const submitBtn = document.querySelector('.feedback-submit');

  if (!name || !msg) {
    alert('Please fill in at least your name and message.');
    return;
  }

  // Disable button while saving
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending… ⏳';
  }

  const timestamp = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Colombo' });

  try {
    // Using no-cors mode — Google Apps Script doesn't support CORS preflight.
    // With no-cors we can't read the response, but the data IS saved successfully.
    await fetch(SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({
        sheet: 'Enquiries',
        row: [
          timestamp,
          name,
          phone || '',
          email || '',
          service || '',
          date || '',
          rating || '',
          msg
        ]
      }),
      headers: { 'Content-Type': 'text/plain' }
    });

    // Show success (we trust it worked — no-cors hides the response)
    if (success) success.classList.add('visible');

  } catch (err) {
    alert('Something went wrong. Please try again.');
    console.error('Sheet save error:', err);
  } finally {
    // Reset form after 5s
    setTimeout(() => {
      ['fb-name','fb-phone','fb-email','fb-date','fb-msg'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
      });
      const sel = document.getElementById('fb-service');
      if (sel) sel.selectedIndex = 0;
      setRating(0);
      const fnText = document.getElementById('file-name-text');
      if (fnText) fnText.textContent = 'Choose an image...';
      if (success) success.classList.remove('visible');
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message  ✦';
      }
    }, 5000);
  }
}



const revealElements = document.querySelectorAll(
  '.gallery-item, .service-card, .value-card, .testimonial-card, .service-detail-img, .service-detail-text, .about-img-block, .about-text-block'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = entry.target.style.transform?.replace('translateY(30px)', 'translateY(0)') || '';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  revealObserver.observe(el);
});

window.addEventListener('resize', () => {
  testIndex = 0;
  updateTestSlider();
});
