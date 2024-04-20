// destinations.js
// destinations.js

var famousPlaces = [
    {
        state: "Andhra Pradesh",
		image: "img/andhrapradesh.jpg",
        places: [
            {
                name: "Tirupati Balaji Temple, Tirumala",
				image: "img/balajitemple.jpg",
                description: "The Tirupati Balaji Temple, located in Tirumala, is one of the most sacred and visited temples in India. Dedicated to Lord Venkateswara, it is situated atop the Tirumala Hills and attracts millions of devotees every year. The temple is known for its intricate architecture, spiritual atmosphere, and the practice of offering hair as a form of devotion."
            },
            {
                name: "Borra Caves, Visakhapatnam",
				image: "img/borracaves.jpg",
                description: "The Borra Caves, nestled in the Ananthagiri Hills of the Araku Valley near Visakhapatnam, are famous for their stunning stalactite and stalagmite formations. Believed to be millions of years old, these limestone caves offer a mesmerizing underground experience for visitors. The caves are also rich in biodiversity and are home to various species of bats and insects."
            },
			{
                name: "Gandikota, Kadapa",
				image: "img/gandikota.jpg",
                description: "Gandikota is a stunning gorge formed by the Pennar River cutting through the Erramala Hills. Often referred to as the Grand Canyon of India, Gandikota offers breathtaking views of deep valleys, rugged terrain, and ancient fort ruins. The Gandikota Fort, built during the 13th century, stands majestically overlooking the gorge and provides a glimpse into the region's rich history. Visitors can explore the fort's architectural marvels, trek along scenic trails, and camp amidst nature's beauty."
            },
            {
                name: "Araku Valley, Visakhapatnam",
				image: "img/arakuvalley.jpg",
                description: "Araku Valley is a picturesque hill station located in the Eastern Ghats of Andhra Pradesh, near Visakhapatnam. Known for its lush greenery, coffee plantations, and cascading waterfalls, Araku Valley offers a tranquil retreat amidst nature. Visitors can enjoy scenic train rides, explore tribal villages, and indulge in local cuisine while soaking in the serene ambiance of the valley."
            }
        ]
    },
    // Add more states and their respective places here...
];

// destinations.js

window.onload = function() {
    var stateNameElement = document.getElementById("stateName");
    var stateImageElement = document.getElementById("stateImage");
    var placesList = document.getElementById("placesList");

    // Function to display famous places for a selected state
    function displayPlaces(state) {
        stateNameElement.textContent = state.state;
        stateImageElement.src = state.image;

        // Clear existing place elements
        placesList.innerHTML = "";

        // Iterate through the places array for the selected state and create HTML elements for each place
        state.places.forEach(function(place) {
            var placeCard = document.createElement("div");
            placeCard.classList.add("col-md-6", "mb-4");

            var card = document.createElement("div");
            card.classList.add("card");

            var cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            var placeImage = document.createElement("img");
            placeImage.classList.add("card-img-top");
            placeImage.src = place.image;
            placeImage.alt = place.name;

            var placeName = document.createElement("h5");
            placeName.classList.add("card-title");
            placeName.textContent = place.name;

            var placeDescription = document.createElement("p");
            placeDescription.classList.add("card-text");
            placeDescription.textContent = place.description;

            cardBody.appendChild(placeImage);
            cardBody.appendChild(placeName);
            cardBody.appendChild(placeDescription);
            card.appendChild(cardBody);
            placeCard.appendChild(card);
            placesList.appendChild(placeCard);
        });
    }

    // Initially display famous places for the first state in the array
    displayPlaces(famousPlaces[0]);

    // Function to handle state selection change
    function onStateChange() {
        var selectedState = this.value;
        var state = famousPlaces.find(function(state) {
            return state.state === selectedState;
        });
        if (state) {
            displayPlaces(state);
        }
    }

    // Populate state dropdown and attach event listener
    var stateSelect = document.getElementById("stateSelect");
    famousPlaces.forEach(function(state) {
        var option = document.createElement("option");
        option.value = state.state;
        option.textContent = state.state;
        stateSelect.appendChild(option);
    });
    stateSelect.addEventListener("change", onStateChange);
};

