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

$(function() {
  $('#load-more-btn').click(loadMoreInfo);
  $('#load-less-btn').click(loadLessInfo);
});

function loadMoreInfo() {
  $("#load-more-progress").show();
  var width = 20;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      $('.phone_number_details').show();
      $('.phone_number_details.more').show();
      $('#load-more-btn').hide();
      $('#load-less-btn').show();
      $('#load-more-progress').hide();
    } else {
      width++; 
      $('#load-more-progress .bar').css({ width: width + '%' }); 
      $('#load-more-progress .bar').html(width * 1  + '%');
    }
  }
}

function loadLessInfo() {
  $('.phone_number_details').show();
  $('.phone_number_details.more').hide();
  $('#load-more-btn').show();
  $('#load-less-btn').hide();
}

// function move(){
//   document.getElementById("more").style.display = "inline";
// }

function myFunction() {
   var element = document.getElementById("LoadClass");
   element.classList.add("loader");
}

$(document).ready(function(){

       setTimeout(function(){
          $('body').addClass('loaded');
          $('h1').css('color','#222222');
        }, 3000);

});
// $ ('body').addClass('full_information');
// $(document).ready(function() {
//   $('[data-toggle="tooltip"]').tooltip();
// });


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
