$(document).ready(function(){

    console.log("test")
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
});