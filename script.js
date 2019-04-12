// $(document).ready(function() {
//   $('.nav-button').click(function() {
//     $('.nav-button').toggleClass('change');
//   });

//   $(window).scroll(function() {
//     let position = $(this).scrollTop();
//     if(position >= 200) {
//       $('.nav-menu').addClass('custom-navbar');
//     } else {
//       $('.nav-menu').removeClass('custom-navbar');
//     }
//   });

//   $(window).scroll(function() {
//     let position = $(this).scrollTop();
//     if(position >= 650) {
//       $('.camera-img').addClass('fromLeft');
//       $('.mission-text').addClass('fromRight');
//     } else {
//       $('.camera-img').removeClass('fromLeft');
//       $('.mission-text').removeClass('fromRight');
//     }
//   });
// });


$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
});


function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Load More"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Load Less"; 
    moreText.style.display = "inline";
  }
}