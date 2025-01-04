

$(document).ready(function () {
    $(".patient-review-slider").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"> <mask id="mask0_319_5930" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25"> <rect width="24" height="24" transform="matrix(-1 0 0 1 24 0.51709)" fill="#D9D9D9"/> </mask> <g mask="url(#mask0_319_5930)"> <path d="M7.825 13.5171H20V11.5171H7.825L13.425 5.91709L12 4.51709L4 12.5171L12 20.5171L13.425 19.1171L7.825 13.5171Z" fill="#27A9E1"/> </g> </svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"> <mask id="mask0_319_5940" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25"> <rect width="24" height="24" transform="matrix(1 0 0 -1 0 24.5171)" fill="#D9D9D9"/> </mask> <g mask="url(#mask0_319_5940)"> <path d="M16.175 11.5171H4V13.5171H16.175L10.575 19.1171L12 20.5171L20 12.5171L12 4.51709L10.575 5.91709L16.175 11.5171Z" fill="#27A9E1"/> </g> </svg>'],

        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});