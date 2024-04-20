// Function to handle form submission for adding a new review
document.getElementById('addReviewForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get input values
    const title = document.getElementById('reviewTitle').value;
    const content = document.getElementById('reviewContent').value;

    // Call function to add the review to the database
    addReview({ title, content });

    // Clear form inputs
    document.getElementById('reviewTitle').value = '';
    document.getElementById('reviewContent').value = '';

    // Refresh reviews list
    displayReviews();
});

// Function to display all reviews in the reviews section
function displayReviews() {
    const reviewsList = document.getElementById('reviewsList');
    reviewsList.innerHTML = ''; // Clear existing reviews

    // Fetch reviews from the database
    const reviews = getAllReviews();

    // Loop through each review and create HTML elements to display them
    reviews.forEach(review => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = ${ review.title }: ${ review.content };

        // Add Edit and Delete buttons
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'btn btn-secondary btn-sm mr-2';
        editButton.addEventListener('click', function () {
            editReview(review.id); // Call edit function with review ID
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.addEventListener('click', function () {
            deleteReview(review.id); // Call delete function with review ID
        });

        li.appendChild(editButton);
        li.appendChild(deleteButton);

        reviewsList.appendChild(li);
    });
}

// Function to handle edit review operation
function editReview(id) {
    // Get the review from the database by ID
    const review = getReviewById(id);

    // Prompt user to input new title and content
    const newTitle = prompt('Enter the new title:', review.title);
    const newContent = prompt('Enter the new content:', review.content);

    // Update the review in the database
    updateReview(id, { title: newTitle, content: newContent });

    // Refresh reviews list
    displayReviews();
}

// Function to handle delete review operation
function deleteReview(id) {
    // Confirm with the user before deleting the review
    if (confirm('Are you sure you want to delete this review?')) {
        // Delete the review from the database
        removeReview(id);

        // Refresh reviews list
        displayReviews();
    }
}

// Initial function call to display reviews when the page loads
displayReviews();