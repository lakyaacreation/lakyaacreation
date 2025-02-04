'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);





// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});





// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}


document.addEventListener('DOMContentLoaded', function () {
  // Function to show products based on category
  function showProducts(category) {
    const productSections = document.querySelectorAll('.product-main');
    productSections.forEach(section => {
      if (section.id === category) {
        section.classList.remove('hidden');
      } else {
        section.classList.add('hidden');
      }
    });
  }



  // Add event listeners to category buttons (example)
  document.getElementById('tailoring-category').addEventListener('click', function () {
    showProducts('tailoring-products');
  });
  document.getElementById('embroidery-category').addEventListener('click', function () {
    showProducts('embroidery-products');
  });
  document.getElementById('jewelry-category').addEventListener('click', function () {
    showProducts('jewelry-products');
  });
  document.getElementById('henna-category').addEventListener('click', function () {
    showProducts('henna-products');
  });
});


// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}


function openOverlay(button) {
  const showcase = button.closest('.showcase');
  const overlay = showcase.querySelector('.product-info');
  overlay.style.display = 'block';
}

function closeOverlay(button) {
  const overlay = button.closest('.product-info');
  overlay.style.display = 'none';
}



document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 3000, // 3 seconds delay between slides
      disableOnInteraction: false,
    },


  });
});

const advertisement = document.getElementById('advertisement');
const mobileNav = document.querySelector('.mobile-bottom-navigation'); // Adjust the selector as needed

// Function to check if the device is within the specified range
function isDeviceInRange() {
  return window.innerWidth <= 1023; // Adjust the width as needed
}

// Show advertisement if within the specified range
if (isDeviceInRange()) {
  advertisement.style.display = 'block';
}

// Show advertisement when mobile navigation is clicked
mobileNav.addEventListener('click', function () {
  if (isDeviceInRange()) {
    advertisement.style.display = 'block';
  }
});

// Show advertisement when the window is resized to the specified range
window.addEventListener('resize', function () {
  if (isDeviceInRange()) {
    advertisement.style.display = 'block';
  } else {
    advertisement.style.display = 'none';
  }
});


document.addEventListener('DOMContentLoaded', function () {
  const sliderContainer = document.getElementById('slider-container');
  const sliderItems = sliderContainer.getElementsByClassName('slider-item');
  let currentIndex = 0;

  function showNextSlide() {
    const previousIndex = currentIndex;
    currentIndex = (currentIndex + 1) % sliderItems.length;

    sliderItems[previousIndex].classList.remove('active');
    sliderItems[previousIndex].classList.add('previous');
    sliderItems[currentIndex].classList.add('active');

    setTimeout(() => {
      sliderItems[previousIndex].classList.remove('previous');
    }, 500); // Match the transition duration
  }

  // Start the slider immediately
  showNextSlide();
  setInterval(showNextSlide, 3000); // Change slide every 3 seconds
});

document.getElementById('menu-tailoring').addEventListener('click', function () {
  // Hide all gallery divs
  document.querySelectorAll('.gallery').forEach(function (gallery) {
    gallery.style.display = 'none';
  });

  // Show the tailoring gallery div
  document.getElementById('gallery-tailoring').style.display = 'flex';
});

document.getElementById('menu-aari').addEventListener('click', function () {
  // Hide all gallery divs
  document.querySelectorAll('.gallery').forEach(function (gallery) {
    gallery.style.display = 'none';
  });

  // Show the aari gallery div
  document.getElementById('gallery-aari').style.display = 'flex';
});

document.getElementById('menu-saree').addEventListener('click', function () {
  // Hide all gallery divs
  document.querySelectorAll('.gallery').forEach(function (gallery) {
    gallery.style.display = 'none';
  });

  // Show the saree gallery div
  document.getElementById('gallery-saree').style.display = 'flex';
});

document.getElementById('menu-henna').addEventListener('click', function () {
  // Hide all gallery divs
  document.querySelectorAll('.gallery').forEach(function (gallery) {
    gallery.style.display = 'none';
  });

  // Show the saree gallery div
  document.getElementById('gallery-henna').style.display = 'flex';
});


// Tailoring
document.getElementById('rms').addEventListener('click', function () {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
  document.querySelectorAll('.readymade').forEach(card => card.style.display = 'block');
});


document.getElementById('sb').addEventListener('click', function () {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
  document.querySelectorAll('.blouse').forEach(card => card.style.display = 'block');
});

document.getElementById('stj').addEventListener('click', function () {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
  document.querySelectorAll('.top').forEach(card => card.style.display = 'block');
});

document.getElementById('scr').addEventListener('click', function () {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
  document.querySelectorAll('.scrunchies').forEach(card => card.style.display = 'block');
});

document.getElementById('menu-tailoring').addEventListener('click', function () {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'block');
});


// Aariwork
document.getElementById('bb').addEventListener('click', function () {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
  document.querySelectorAll('.bridal').forEach(card => card.style.display = 'block');
});


document.getElementById('nbb').addEventListener('click', function () {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
  document.querySelectorAll('.nonbridal').forEach(card => card.style.display = 'block');
});

document.getElementById('hb').addEventListener('click', function () {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
  document.querySelectorAll('.belts').forEach(card => card.style.display = 'block');
});

document.getElementById('kw').addEventListener('click', function () {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
  document.querySelectorAll('.kidswear').forEach(card => card.style.display = 'block');
});

document.getElementById('jwl').addEventListener('click', function () {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
  document.querySelectorAll('.jwel').forEach(card => card.style.display = 'block');
});

document.getElementById('menu-aari').addEventListener('click', function () {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'block');
});

// saree modification
document.getElementById('spt').addEventListener('click', function () {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
  document.querySelectorAll('.tusseles').forEach(card => card.style.display = 'block');
});

document.getElementById('sip').addEventListener('click', function () {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
  document.querySelectorAll('.ironing').forEach(card => card.style.display = 'block');
});

document.getElementById('menu-saree').addEventListener('click', function () {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'block');
});

// henna
document.getElementById('pri').addEventListener('click', function () {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
  document.querySelectorAll('.prices').forEach(card => card.style.display = 'block');
});

document.getElementById('pro').addEventListener('click', function () {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
  document.querySelectorAll('.product').forEach(card => card.style.display = 'block');
});

document.getElementById('menu-henna').addEventListener('click', function () {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'block');
});

//mobile nav

//tailoring

document.getElementById('mobile-rms').addEventListener('click', function () {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
  document.querySelectorAll('.readymade').forEach(card => card.style.display = 'block');
});

document.getElementById('mobile-sb').addEventListener('click', function () {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
  document.querySelectorAll('.blouse').forEach(card => card.style.display = 'block');
});

document.getElementById('mobile-stj').addEventListener('click', function () {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
  document.querySelectorAll('.top').forEach(card => card.style.display = 'block');
});

document.getElementById('mobile-scr').addEventListener('click', function () {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
  document.querySelectorAll('.scrunchies').forEach(card => card.style.display = 'block');
});

// Aariwork
document.getElementById('mobile-bb').addEventListener('click', function () {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
  document.querySelectorAll('.bridal').forEach(card => card.style.display = 'block');
});

document.getElementById('mobile-nbb').addEventListener('click', function () {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
  document.querySelectorAll('.nonbridal').forEach(card => card.style.display = 'block');
});

document.getElementById('mobile-hb').addEventListener('click', function () {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
  document.querySelectorAll('.belts').forEach(card => card.style.display = 'block');
});

document.getElementById('mobile-kw').addEventListener('click', function () {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
  document.querySelectorAll('.kidswear').forEach(card => card.style.display = 'block');
});

document.getElementById('mobile-jwl').addEventListener('click', function () {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
  document.querySelectorAll('.jwel').forEach(card => card.style.display = 'block');
});

//saree modification
document.getElementById('mobile-spt').addEventListener('click', function () {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
  document.querySelectorAll('.tusseles').forEach(card => card.style.display = 'block');
});

document.getElementById('mobile-sip').addEventListener('click', function () {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
  document.querySelectorAll('.ironing').forEach(card => card.style.display = 'block');
});

//henna
document.getElementById('mobile-pri').addEventListener('click', function () {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
  document.querySelectorAll('.prices').forEach(card => card.style.display = 'block');
});

document.getElementById('mobile-pro').addEventListener('click', function () {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
  document.querySelectorAll('.product').forEach(card => card.style.display = 'block');
});



