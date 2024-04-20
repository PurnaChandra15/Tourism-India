// Set the background image dynamically using JavaScript
var imagePath = "img/background.png"; // Path to your background image
document.body.style.backgroundImage = 'url("' + imagePath + '")';
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center';
document.body.style.backgroundRepeat = 'no-repeat';

// script.js

// Function to search destinations based on the selected state
function searchDestinations() {
    var stateSelect = document.getElementById('stateSelect');
    var selectedState = stateSelect.value;
    
    // Perform search based on the selected state (you can add your search logic here)
    console.log('Searching destinations for ' + selectedState);
    
    // Display search results section
    document.getElementById('searchResults').style.display = 'block';
}

// Function to plan itinerary
function planItinerary() {
    // Perform itinerary planning logic here
    console.log('Planning itinerary');
}

// script.js

function searchDestinations() {
    var selectedState = document.getElementById("stateSelect").value;
    if (selectedState) {
        window.location.href = "destinations.html?state=" + encodeURIComponent(selectedState);
    }
}

