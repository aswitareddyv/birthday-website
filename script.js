let currentSlide = 1;

const totalSlides = 5;


/* =====================================================
                    NEXT SLIDE
===================================================== */

function nextSlide() {

    if (currentSlide < totalSlides) {

        currentSlide++;

        showSlide(currentSlide);

    }

}


/* =====================================================
                    GO TO SLIDE
===================================================== */

function goToSlide(number) {

    currentSlide = number;

    showSlide(currentSlide);

}


/* =====================================================
                    SHOW SLIDE
===================================================== */

function showSlide(number) {

    const slides =
        document.querySelectorAll(".slide");

    const dots =
        document.querySelectorAll(".dot");


    slides.forEach(function(slide) {

        slide.classList.remove("active");

    });


    dots.forEach(function(dot) {

        dot.classList.remove("active-dot");

    });


    const selectedSlide =
        document.getElementById(
            "slide" + number
        );


    selectedSlide.classList.add("active");


    dots[number - 1]
        .classList.add("active-dot");

}


/* =====================================================
                    CONFETTI
===================================================== */

function startConfetti() {

    const symbols = [

        "🎉",
        "✨",
        "🎊",
        "💖",
        "💕",
        "⭐",
        "🥳",
        "❤️"

    ];


    for (let i = 0; i < 100; i++) {

        const confetti =
            document.createElement("div");


        confetti.innerHTML =
            symbols[
                Math.floor(
                    Math.random()
                    * symbols.length
                )
            ];


        confetti.style.position =
            "fixed";


        confetti.style.left =
            Math.random() * 100 + "vw";


        confetti.style.top =
            "-50px";


        confetti.style.fontSize =
            Math.random() * 20 + 15 + "px";


        confetti.style.zIndex =
            "9999";


        confetti.style.pointerEvents =
            "none";


        confetti.style.transition =
            "top 3s ease-in, transform 3s linear";


        document.body.appendChild(
            confetti
        );


        setTimeout(function() {

            confetti.style.top =
                "105vh";


            confetti.style.transform =
                `rotate(
                    ${Math.random() * 720}deg
                )`;

        }, 50);


        setTimeout(function() {

            confetti.remove();

        }, 3500);

    }

}


/* =====================================================
                    FINAL CELEBRATION
===================================================== */

function celebrate() {

    startConfetti();


    setTimeout(function() {

        startConfetti();

    }, 1000);


    setTimeout(function() {

        startConfetti();

    }, 2000);

}