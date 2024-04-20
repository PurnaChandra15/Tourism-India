// Array of states in India
var states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
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
window.onload = populateStates;
