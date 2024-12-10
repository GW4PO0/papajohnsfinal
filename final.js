// SCROLL FROM CONTAINER TO A CONTAINER
function scrollToContainer1() {
  document.getElementById('container1').scrollIntoView({ behavior: 'smooth' });
}
function scrollToContainer2() {
    document.getElementById('container2').scrollIntoView({ behavior: 'smooth' });
}
function scrollToContainer3() {
  document.getElementById('container3').scrollIntoView({ behavior: 'smooth' });
}
function scrollToContainer4() {
  document.getElementById('container4').scrollIntoView({ behavior: 'smooth' });
}
function scrollToContainer5() {
  document.getElementById('container5').scrollIntoView({ behavior: 'smooth' });
}
// CONTAINER 3 //
var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: -10,
        stretch: 0,
        depth: 100,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

// REDIRCET TO USER RESERVE DETAILS //
function redirectToReservation(branch) {
    // Redirect to the reservation page with the branch parameter
    window.location.href = `reservation.html?branch=${branch}`;
  }
  

function showReservationForm1() {
    // Redirect to the reservation form page
    window.location.href = "reservation(1).html"; // Replace "reservation_form.html" with the actual filename
  }
  function showReservationForm2() {
    // Redirect to the reservation form page
    window.location.href = "reservation(2).html"; // Replace "reservation_form.html" with the actual filename
  }
  function showReservationForm3() {
    // Redirect to the reservation form page
    window.location.href = "reservation(3).html"; // Replace "reservation_form.html" with the actual filename
  }
  function makeReservation1() {
    // Redirect to the reservation form page
    window.location.href = "makeReservation.html"; // Replace "reservation_form.html" with the actual filename
  }

  
  

// CONTAINER 4 //
function toggleDropdown(dropdownId) {
    const clickedDropdown = document.getElementById(dropdownId);
    const menuItem = clickedDropdown.parentElement; 

    if (clickedDropdown.style.display === 'block') {
        clickedDropdown.style.display = 'none'; 
        menuItem.classList.remove('active'); 
    } else {
        clickedDropdown.style.display = 'block'; 
        menuItem.classList.add('active'); 
    }
}


// Function to go back to the previous page
function goBack() {
    window.history.back(); 
}