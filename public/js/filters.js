/*filter and display animals based on user input (animal name and habitat)*/

// Initial rendering of all animals -- immediately invoked function that fetches and displays all animals when the page first loads
(async function() {
    try {
        const animalsResponse = await fetch('/animals');
        allAnimals = await animalsResponse.json();
        renderAnimals(allAnimals);
    } catch (error) {
        console.error('Error fetching animal data:', error);
    }
})();


/*function that takes the animal name and habitat that the user gave as input, to filter the animals*/
const twoFilters = async function(animal,habitat){
        const filteredAnimals = allAnimals.filter(x => x.name.toLowerCase().includes(animal.toLowerCase()));
        const finalAnimals = filteredAnimals.filter(x => x.habitat.includes(habitat));
        renderAnimals(finalAnimals);
    };

/* run filter function when the habitat dropdown value changes */
document.getElementById("habitatFilter").addEventListener('change', async function() {
    var selectedHabitat = this.value;
    var selectedAnimal = document.getElementById("search-box");
    twoFilters(selectedAnimal.value,selectedHabitat);
});

/* run filter when user searches for animal name by pressing enter*/
document.getElementById("search-box").addEventListener('keyup', async function(event) {
    if (event.key === "Enter") {
        var selectedAnimal = this.value;
        var selectedHabitat = document.getElementById("habitatFilter");
        twoFilters(selectedAnimal,selectedHabitat.value); 
    }
    });

/* run filter when the user clicks on the search button (added to be mobile-friendly) */
document.getElementById("search-button").addEventListener('click', async function() {
    var selectedAnimal = document.getElementById("search-box");
    var selectedHabitat = document.getElementById("habitatFilter");
    twoFilters(selectedAnimal.value,selectedHabitat.value); 
});

/* function to display filtered animals based on HTML template */
function renderAnimals(animals) {
    const animalGrid = document.querySelector('.animal-grid');
    animalGrid.innerHTML = ''; // Clear current animal cards

    const template = document.getElementById('animal-card-template').content;

    animals.forEach((animal, id) => {
        const animalCard = document.importNode(template, true);
        animalCard.querySelector('.animal-card').id = id;
        animalCard.querySelector('.card').setAttribute('onclick', `playSound('${animal.sound}')`);
        animalCard.querySelector('.card-img-top').src = animal.image;
        animalCard.querySelector('.card-img-top').alt = `${animal.name} Image`;
        animalCard.querySelector('.card-title').textContent = animal.name;

        animalGrid.appendChild(animalCard);

    // animals.forEach((animal, id) => {
    //     const animalCard = document.createElement('div');
    //     animalCard.id = id;
    //     animalCard.className = 'animal-card col-lg-4 col-md-6 mb-4';

    //     animalCard.innerHTML = `
    //         <div class="card" onclick="playSound('${animal.sound}')">
    //             <img src="${animal.image}" class="card-img-top" alt="${animal.name} Image" tabindex="0">
    //             <div class="card-body">
    //                 <h5 class="card-title" tabindex="0">${animal.name}</h5>
    //             </div>
    //         </div>
    //     `;
        
    //     animalGrid.appendChild(animalCard);
    });
}

