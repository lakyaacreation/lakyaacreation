// to get current year
function getYear() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


$('.custom_slick_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  fade: true,
  adaptiveHeight: true,
  asNavFor: '.slick_slider_nav',
  responsive: [{
    breakpoint: 768,
    settings: {
      dots: false
    }
  }]
})

$('.slick_slider_nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.custom_slick_slider',
  centerMode: false,
  focusOnSelect: true,
  variableWidth: true
});





function filterCategory(category) {
  let boxes = document.querySelectorAll('.box');

  boxes.forEach(box => {
    if (box.getAttribute('data-category') === category || category === 'all') {
      box.style.display = "block"; // Show relevant boxes
    } else {
      box.style.display = "none"; // Hide others
    }
  });
}






function filterCategory(category) {
    const boxes = document.querySelectorAll('.box');
    const bookButton = document.getElementById('serviceBookButton');
    
    boxes.forEach(box => {
        if (category === 'all') {
            box.style.display = 'block';
            bookButton.style.display = 'none';
        } else {
            if (box.getAttribute('data-category') === category) {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
            
            // Show book button for specific categories
            if (category === 'iron' || category === 'kunjam' || category === 'aari') {
                bookButton.style.display = 'block';
            } else {
                bookButton.style.display = 'none';
            }
        }
    });
}



