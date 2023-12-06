jQuery(document).ready(function() {
	
	"use strict";
	// Your custom js code goes here.

});




// Search Box Start

// Sample data for employee suggestions
const employeeData = [
    { name: 'Shrikant Weds Divya', image: 'img/shrikant.jpg', link: 'https://shrikant-weds-divya-01.on.drv.tw/SmartAlbum.in/' },
    { name: 'Mithun Weds Urmila', image: 'https://i.pinimg.com/280x280_RS/e5/51/b6/e551b638b0ae76572914ef74498efd36.jpg', link: 'https://smart-marriage-album-2.on.drv.tw/MarriageAlbum-2' },
    // Add more employees as needed
];

const searchBox = document.getElementById('search-box');
const suggestionsContainer = document.getElementById('suggestions-container');

// Event listener for input changes
searchBox.addEventListener('input', function () {
    const inputValue = this.value.toLowerCase();
    const filteredEmployees = employeeData.filter(employee =>
        employee.name.toLowerCase().includes(inputValue)
    );

    displaySuggestions(filteredEmployees);
});

// Function to display suggestions
function displaySuggestions(employees) {
    suggestionsContainer.innerHTML = '';

    employees.forEach(employee => {
        const suggestionElement = document.createElement('div');
        suggestionElement.classList.add('suggestion');
        suggestionElement.innerHTML = `
            <img src="${employee.image}" alt="${employee.name}">
            <span>${employee.name}</span>
        `;
        suggestionElement.addEventListener('click', function () {
            // Redirect to the employee details page when a suggestion is clicked
            window.location.href = employee.link;
        });

        suggestionsContainer.appendChild(suggestionElement);
    });

    // Display the suggestions container
    suggestionsContainer.style.display = employees.length > 0 ? 'block' : 'none';
}

// Close suggestions when clicking outside the search box
document.addEventListener('click', function (event) {
    if (!event.target.closest('#search-container')) {
        suggestionsContainer.style.display = 'none';
    }
});


// Search Box End