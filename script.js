// Mobile navigation menu
const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");

if (menuButton && mainNav) {
    menuButton.addEventListener("click", function () {
        mainNav.classList.toggle("show");
    });
}

// FAQ expand and collapse
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {
    question.addEventListener("click", function () {
        const answer = question.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});

// Gallery slideshow
const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=900",
        alt: "Two dogs sitting together outside",
        caption: "Happy dogs enjoying the day."
    },
    {
        src: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=900",
        alt: "Small dog sitting on a couch",
        caption: "Comfortable rest areas for quiet breaks."
    },
    {
        src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=900",
        alt: "Dog looking directly at the camera",
        caption: "Friendly care for dogs of all sizes."
    }
];

let currentImage = 0;

const galleryImage = document.getElementById("galleryImage");
const caption = document.getElementById("caption");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

function updateGallery() {
    if (galleryImage && caption) {
        galleryImage.src = galleryImages[currentImage].src;
        galleryImage.alt = galleryImages[currentImage].alt;
        caption.textContent = galleryImages[currentImage].caption;
    }
}

if (previousButton && nextButton) {
    previousButton.addEventListener("click", function () {
        currentImage--;

        if (currentImage < 0) {
            currentImage = galleryImages.length - 1;
        }

        updateGallery();
    });

    nextButton.addEventListener("click", function () {
        currentImage++;

        if (currentImage >= galleryImages.length) {
            currentImage = 0;
        }

        updateGallery();
    });
}

// Contact form message
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        formMessage.textContent = "Thank you! Your message has been received for this class project demo.";
        contactForm.reset();
    });
}
