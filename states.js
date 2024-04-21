// Array of states in India
var states = [
    "AndhraPradesh",
    "ArunachalPradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "HimachalPradesh",
	"JammuKashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
	"Ladakh",
    "MadhyaPradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
	"NewDelhi",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "TamilNadu",
    "Telangana",
    "Tripura",
    "UttarPradesh",
    "Uttarakhand",
    "WestBengal"
];

// Function to populate the select element with options for states
function populateStates() {
    var selectElement = document.getElementById('stateSelect');
    states.forEach(function(state) {
        var option = document.createElement('option');
        option.value = state.toLowerCase().replace(/\s+/g, '_');
        option.textContent = state;
        selectElement.appendChild(option);
    });
}

// Populate the select element when the page loads
window.onload = populateStates;
