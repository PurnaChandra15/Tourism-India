// reviews.js

// Mock data for reviews
let reviews = [];

// Function to add a review
function addReview(review) {
    reviews.push(review);
    console.log('Review added:', review);
}

// Function to get reviews for a specific place
function getReviewsForPlace(state, placeName) {
    return reviews.filter(review => review.state === state && review.place === placeName);
}

// Function to edit a review
function editReview(reviewId) {
    console.log('Edit review with ID:', reviewId);
    // Add your edit review logic here
}

// Function to delete a review
function deleteReview(reviewId) {
    console.log('Delete review with ID:', reviewId);
    // Add your delete review logic here
}

// Function to display reviews for the selected place
function displayReviewsForPlace(state, placeName) {
    const reviewsContainer = document.getElementById('reviewsContainer');
    reviewsContainer.innerHTML = ''; // Clear existing reviews

    const reviews = getReviewsForPlace(state, placeName);

    // Loop through each review and create HTML elements to display them
    reviews.forEach(review => {
        const div = document.createElement('div');
        div.className = 'card mb-2';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const h5 = document.createElement('h5');
        h5.className = 'card-title';
        h5.textContent = `Modified By: ${review.modifiedBy}`;

        const rating = document.createElement('p');
        rating.className = 'card-text';
        rating.textContent = `Rating: ${review.rating}/5`;

        const experience = document.createElement('p');
        experience.className = 'card-text';
        experience.textContent = `Experience: ${review.experience}`;

        const editButton = document.createElement('button');
        editButton.className = 'btn btn-secondary btn-sm mr-2';
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function () {
            editReview(review.id); // Call edit function with review ID
        });

        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            deleteReview(review.id); // Call delete function with review ID
        });

        cardBody.appendChild(h5);
        cardBody.appendChild(rating);
        cardBody.appendChild(experience);
        cardBody.appendChild(editButton);
        cardBody.appendChild(deleteButton);

        div.appendChild(cardBody);

        reviewsContainer.appendChild(div);
    });
}

// Function to add a review to the reviews array
function addReview(review) {
    reviews.push(review); // Add the review to the global reviews array
}
