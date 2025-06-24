// document.addEventListener("DOMContentLoaded", function () {
//     const testimonials = document.querySelectorAll(".testimonial-card");
//     const dotsContainer = document.getElementById("pagination-dots");
//     const leftBtn = document.getElementById("prev-slide");
//     const rightBtn = document.getElementById("next-slide");

//     let currentSlide = 0;
//     let perSlide = window.innerWidth >= 768 ? 2 : 1;
//     let totalSlides = Math.ceil(testimonials.length / perSlide);

//     function renderSlides() {
//         perSlide = window.innerWidth >= 768 ? 2 : 1;
//         totalSlides = Math.ceil(testimonials.length / perSlide);

//         testimonials.forEach((card, index) => {
//             const slideIndex = Math.floor(index / perSlide);
//             card.classList.toggle("hidden", slideIndex !== currentSlide);
//         });

//         renderDots();
//     }

//     function renderDots() {
//         dotsContainer.innerHTML = "";
//         for (let i = 0; i < totalSlides; i++) {
//             const dot = document.createElement("span");
//             dot.className = `w-3 h-3 rounded-full transition ${i === currentSlide ? "bg-black" : "bg-gray-400"
//                 }`;
//             dotsContainer.appendChild(dot);
//         }
//     }

//     function showSlide(index) {
//         currentSlide = (index + totalSlides) % totalSlides;
//         renderSlides();
//     }

//     leftBtn.addEventListener("click", () => showSlide(currentSlide - 1));
//     rightBtn.addEventListener("click", () => showSlide(currentSlide + 1));
//     window.addEventListener("resize", renderSlides);

//     renderSlides();
// });





// document.addEventListener("DOMContentLoaded", function () {
//     const cards = document.querySelectorAll(".testimonial-card");
//     const dotsContainer = document.getElementById("pagination-dots");
//     const prevBtn = document.getElementById("prev-slide");
//     const nextBtn = document.getElementById("next-slide");

//     let currentSlide = 0;
//     let perSlide = window.innerWidth >= 768 ? 2 : 1;
//     let totalSlides = Math.ceil(cards.length / perSlide);

//     function updateSlideVisibility() {
//         perSlide = window.innerWidth >= 768 ? 2 : 1;
//         totalSlides = Math.ceil(cards.length / perSlide);

//         cards.forEach((card, index) => {
//             const start = currentSlide * perSlide;
//             const end = start + perSlide;
//             const isVisible = index >= start && index < end;

//             if (isVisible) {
//                 card.classList.remove("opacity-0", "translate-x-10");
//                 card.classList.add("opacity-100", "translate-x-0");
//             } else {
//                 card.classList.add("opacity-0", "translate-x-10");
//                 card.classList.remove("opacity-100", "translate-x-0");
//             }
//         });

//         updateDots();
//     }

//     function updateDots() {
//         dotsContainer.innerHTML = "";
//         for (let i = 0; i < totalSlides; i++) {
//             const dot = document.createElement("span");
//             dot.className =
//                 "w-3 h-3 rounded-full " +
//                 (i === currentSlide ? "bg-black" : "bg-gray-400");
//             dotsContainer.appendChild(dot);
//         }
//     }

//     function goToSlide(index) {
//         currentSlide = (index + totalSlides) % totalSlides;
//         updateSlideVisibility();
//     }

//     prevBtn.addEventListener("click", () => goToSlide(currentSlide - 1));
//     nextBtn.addEventListener("click", () => goToSlide(currentSlide + 1));
//     window.addEventListener("resize", updateSlideVisibility);

//     updateSlideVisibility();
// });







// testimonial-slider.js
document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("testimonial-track");
    const cards = document.querySelectorAll(".testimonial-card");
    const prev = document.getElementById("prev-slide");
    const next = document.getElementById("next-slide");
    const dotsContainer = document.getElementById("pagination-dots");

    let currentSlide = 0;
    let cardsPerSlide = window.innerWidth >= 768 ? 2 : 1;
    let totalSlides = Math.ceil(cards.length / cardsPerSlide);

    function updateSlide() {
        const slideWidth = cards[0].offsetWidth;
        track.style.transform = `translateX(-${currentSlide * slideWidth * cardsPerSlide}px)`;
        renderDots();
    }

    function renderDots() {
        dotsContainer.innerHTML = "";
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement("span");
            dot.className = `w-3 h-3 rounded-full ${i === currentSlide ? "bg-black" : "bg-gray-400"}`;
            dotsContainer.appendChild(dot);
        }
    }

    function goToSlide(index) {
        currentSlide = (index + totalSlides) % totalSlides;
        updateSlide();
    }

    prev.addEventListener("click", () => goToSlide(currentSlide - 1));
    next.addEventListener("click", () => goToSlide(currentSlide + 1));
    window.addEventListener("resize", () => {
        cardsPerSlide = window.innerWidth >= 768 ? 2 : 1;
        totalSlides = Math.ceil(cards.length / cardsPerSlide);
        updateSlide();
    });

    updateSlide();
});
