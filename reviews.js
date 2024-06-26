// reviews.js

// Mock data for reviews
let reviews = [];

// Function to add a review
function addReview(review) {
    reviews.push({ ...review, id: generateId() }); // Add a unique ID to each review
    console.log('Review added:', review);
}

// Function to generate a unique ID for each review
function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

// Function to get reviews for a specific place
function getReviewsForPlace(state, placeName) {
    return reviews.filter(review => review.state === state && review.place === placeName);
}

// Function to edit a review
function editReview(reviewId, modifiedBy, rating, experience) {
    const index = reviews.findIndex(review => review.id === reviewId);
    if (index !== -1) {
        reviews[index].modifiedBy = modifiedBy;
        reviews[index].rating = rating;
        reviews[index].experience = experience;
        console.log('Review edited:', reviews[index]);
    } else {
        console.error('Review not found with ID:', reviewId);
    }
}

// Function to delete a review
function deleteReview(reviewId) {
    const index = reviews.findIndex(review => review.id === reviewId);
    if (index !== -1) {
        const deletedReview = reviews.splice(index, 1);
        console.log('Review deleted:', deletedReview);
    } else {
        console.error('Review not found with ID:', reviewId);
    }
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

// Function to update the reviews list
function updateReviewsList() {
    const reviewsList = document.getElementById('reviews');
    reviewsList.innerHTML = '';
    reviews.forEach(function(review, index) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${review.userName} (${review.state}, ${review.place}): ${review.userReview} (${generateStarRating(review.starRating)} stars)`;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('btn', 'btn-primary', 'mx-2');
        editButton.addEventListener('click', function() {
            const updatedName = prompt('Enter updated name:', review.userName);
            const updatedReview = prompt('Enter updated review:', review.userReview);
            const updatedRating = prompt('Enter updated rating (1-5):', review.starRating);

            if (updatedName && updatedReview && updatedRating) {
                reviews[index] = { userName: updatedName, state: review.state, place: review.place, userReview: updatedReview, starRating: updatedRating };
                updateReviewsList();
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.addEventListener('click', function() {
            reviews.splice(index, 1);
            updateReviewsList();
        });

        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        reviewsList.appendChild(listItem);
    });
}

// Function to dynamically generate star symbols based on rating value
function generateStarRating(rating) {
    const filledStars = "★".repeat(rating);
    const emptyStars = "☆".repeat(5 - rating);
    return filledStars + emptyStars;
}
