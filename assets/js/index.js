const navbarbtn = () => {
    document.getElementById("name").classList.toggle("show-navbar")
    document.getElementById("rotates").classList.toggle("rotate-40")
    document.getElementById("transparent").classList.toggle("bg-transparent")
    document.getElementById("rotates2").classList.toggle("rotate-45")
    document.body.classList.toggle("overflow-hidden")
}
// slider
$('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false, // Remove dots
    arrows: false,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000,
    variableWidth: true,
    centerMode: true,
    centerPadding: '40px',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                autoplay: true,
                autoplaySpeed: 1000,
                centerMode: true,
                centerPadding: '40px',
            }
        },
        {
            breakpoint: 786,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1000,
                centerMode: true,
                centerPadding: '40px',
            }
        }
    ]
});


// Get the button element
const mybutton = document.getElementById("myBtn");

// Add scroll event listener
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    // Check scroll position
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block"; // Show the button
    } else {
        mybutton.style.display = "none"; // Hide the button
    }
}

// Scroll to top when the button is clicked
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scroll effect
    });
}
