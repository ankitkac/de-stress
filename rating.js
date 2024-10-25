document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.stars i');
    const ratingValue = document.querySelector('.rating-value');
    let rating = 0;

    // Handle star rating
    stars.forEach(star => {
        star.addEventListener('click', () => {
            rating = star.getAttribute('data-rating');
            updateStars(rating);
            ratingValue.textContent = `You rated this ${rating} stars`;
        });
    });

    function updateStars(rating) {
        stars.forEach(star => {
            if (star.getAttribute('data-rating') <= rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }

    // Handle feedback submission
    const feedbackForm = document.getElementById('feedback-form');
    const feedbackTextarea = document.getElementById('feedback');
    const thankYouMessage = document.getElementById('thank-you-message');

    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Assuming this is where you'd send data to a server
        const feedback = feedbackTextarea.value;

        if (feedback.trim()) {
            thankYouMessage.textContent = 'Thank you for your feedback!';
            feedbackTextarea.value = '';
            setTimeout(() => {
                thankYouMessage.textContent = '';
            }, 3000);
        } else {
            thankYouMessage.textContent = 'Please enter your feedback before submitting.';
        }
    });
});
