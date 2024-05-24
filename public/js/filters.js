
let cachedAnimals = null;

/*apply both habitat and user search filter*/
const twoFilters = async function(animal,habitat){
        if (!cachedAnimals) {
            try {
                const animalsResponse = await fetch('/animals');
                cachedAnimals = await animalsResponse.json();
            } catch (error) {
                console.error('Error fetching animal data:', error);
                return;
                    }
                }
        
        const filteredAnimals = cachedAnimals.filter(x => x.name.toLowerCase().includes(animal.toLowerCase()));
        const finalAnimals = filteredAnimals.filter(x => x.habitat.includes(habitat));
        console.log(animal, filteredAnimals)
        console.log(habitat, finalAnimals)
        renderAnimals(finalAnimals);
    };

/* apply filter when there is a change to habitat dropdown */
document.getElementById("habitatFilter").addEventListener('change', async function() {
    var selectedHabitat = this.value;
    var selectedAnimal = document.getElementById("search-box");
    twoFilters(selectedAnimal.value,selectedHabitat);
});

/* apply filter when user searches for animal name by pressing enter*/
document.getElementById("search-box").addEventListener('keyup', async function(event) {
    if (event.key === "Enter" || event.key === 13) {
        var selectedAnimal = this.value;
        var selectedHabitat = document.getElementById("habitatFilter");
        twoFilters(selectedAnimal,selectedHabitat.value); 
    }
    });

/* apply filter when the user searches for animal name by clicking on the search button */
document.getElementById("search-button").addEventListener('click', async function() {
    var selectedAnimal = document.getElementById("search-box");
    var selectedHabitat = document.getElementById("habitatFilter");
    twoFilters(selectedAnimal.value,selectedHabitat.value); 
});

    

/* Render animals function */
function renderAnimals(animals) {
    const animalGrid = document.querySelector('.animal-grid');
    animalGrid.innerHTML = ''; // Clear current animal cards

    animals.forEach((animal, id) => {
        const animalCard = document.createElement('div');
        animalCard.id = id;
        animalCard.className = 'animal-card col-lg-4 col-md-6 mb-4';

        animalCard.innerHTML = `
            <div class="card" onclick="playSound('${animal.sound}')">
                <img src="${animal.image}" class="card-img-top" alt="${animal.name} Image" tabindex="0">
                <div class="card-body">
                    <h5 class="card-title" tabindex="0">${animal.name}</h5>
                </div>
            </div>
        `;
        
        animalGrid.appendChild(animalCard);
    });
}

// Initial rendering of all animals
(async function() {
    try {
        const animalsResponse = await fetch('/animals');
        cachedAnimals = await animalsResponse.json();
        renderAnimals(cachedAnimals);
    } catch (error) {
        console.error('Error fetching animal data:', error);
    }
})();

