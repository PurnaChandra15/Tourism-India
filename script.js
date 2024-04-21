// script.js

// Set the background image dynamically using JavaScript
var imagePath = "img/background.png"; // Path to your background image
document.body.style.backgroundImage = 'url("' + imagePath + '")';
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center';
document.body.style.backgroundRepeat = 'no-repeat';

// Add event listener for the search button to navigate to destinations page with selected state
var searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", searchDestinations);

// Function to search destinations based on the selected state
function searchDestinations() {
    const selectedState = document.getElementById("stateSelect").value.replace(/\s+/g, '-');
	console.log("Selected State:", selectedState); // Add this line
    if (selectedState) {
        window.location.href = `destinations.html#${encodeURIComponent(selectedState)}`;
    } else {
        alert("Please select a state.");
    }
}

// Populate the state dropdown and set up event listeners
window.onload = function() {
    const stateSelect = document.getElementById('stateSelect');
    famousPlaces.forEach(state => {
        let option = document.createElement('option');
        option.value = state.state.replace(/\s+/g, '-'); // Replace spaces with hyphens
        option.textContent = state.state;
        stateSelect.appendChild(option);
    });

    stateSelect.addEventListener('change', function() {
        const selectedState = this.value.replace(/\s+/g, '-');
        window.location.href = `destinations.html#${encodeURIComponent(selectedState)}`;
    });
};




// Add event listener for the reviews button to navigate to reviews page
var reviewsButton = document.getElementById("reviewsButton");
reviewsButton.addEventListener("click", function() {
    window.location.href = "reviews.html";
});

