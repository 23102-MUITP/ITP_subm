
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');


nextBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonials();
});

prevBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonials();
});

function updateTestimonials() {
    testimonials.forEach((testimonial, index) => {
        testimonial.style.transform = `translateX(${-100 * currentTestimonial}%)`;
    });
}

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Add validation logic
});
