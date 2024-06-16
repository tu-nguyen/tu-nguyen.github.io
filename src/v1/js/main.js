$(document).ready(function(){
    // // create consistant space for landing and navbar
    // $(function() {

    //   var navbarHeight = document.getElementById("navbar").height();
    //   var landingHeight = document.getElementById("landing").height();      

    //   $('.landing').css('height', $(landingHeight - navbarHeight) + 'px');
      
    // });

    let $btns = $('.projects .button-group button');

    $btns.click(function(e){
        $('.projects .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.projects .projects-gallery').isotope({
            filter:selector
        });
        return false;
    })


    $('.test-popup-link').magnificPopup({
        type:'image',
        gallery:{enabled:true},
    });

    // sticky navbar
    window.onscroll = function() {myFunction()};
    
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }
});