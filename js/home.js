//this function To Button ScrollTop 
let myButton = document.querySelector(".scrolltop");

window.onscroll = function() {
    // this function to know me the number in my scroll
    
    //console.log(window.pageYOffset)

    if(window.pageYOffset >= 620) {
        myButton.style.display = "block";
    }
    else {
        myButton.style.display = "none";
    }
}

myButton.addEventListener("click" , scroll);

function scroll() {
    window.scrollTo(0 , 0);
}


//this function in section folio
$('.first').click(function() {
    $('.f1 .one').show().siblings().hide();
});
$('.second').click(function() {
    $('.f1 .two').show().siblings().hide();
});

//this function to Navbar2
$(window).scroll(function() {
    var scroll = $(this).scrollTop();
    if(scroll > 600) {
        $('.header').slideDown();
    } else {
        $('.header').slideUp();
    }
})

//this function in section about
$('.fancybox').fancybox();


// this function in section blog

$('div.acortion h3').click(function() {
    $(this).next().slideToggle();

    $('div.acortion p').not($(this).next()).slideUp();
});

// this function in section Counter
$('.download').click(function(){
    $('.timer').countTo();
});

// this function in section Recent

$('.all_images').mixItUp();

