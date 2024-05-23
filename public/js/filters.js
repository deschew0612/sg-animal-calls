
/*filter by habitat function*/
/* registers user's selection of habitat*/
document.getElementById("habitatFilter").addEventListener('change', 
     async function() {
         var selectedHabitat = this.value;
         console.log(selectedHabitat);
         const animalsResponse = await fetch('/animals')
         const animals = await animalsResponse.json()
         animals.forEach(function(animal) {
             if (animal.habitat.includes(selectedHabitat)){
                 console.log(animal);
             }
         })
     }
 );

// let cachedAnimals = null;

// /* Filter by habitat function */
// document.getElementById("habitatFilter").addEventListener('change', async function() {
//     var selectedHabitat = this.value;
//     console.log(selectedHabitat);

//     if (!cachedAnimals) {
//         try {
//             const animalsResponse = await fetch('/animals');
//             cachedAnimals = await animalsResponse.json();
//         } catch (error) {
//             console.error('Error fetching animal data:', error);
//             return;
//         }
//     }

//     // Filter animals based on the selected habitat
//     const filteredAnimals = selectedHabitat === 'all' ? cachedAnimals : cachedAnimals.filter(animal => animal.habitat.includes(selectedHabitat));

//     // Render filtered animals
//     renderAnimals(filteredAnimals);
// });

// /* Render animals function */
// function renderAnimals(animals) {
//     const animalGrid = document.querySelector('.animal-grid');
//     animalGrid.innerHTML = ''; // Clear current animal cards

//     animals.forEach((animal, id) => {
//         const animalCard = document.createElement('div');
//         animalCard.id = id;
//         animalCard.className = 'animal-card col-lg-4 col-md-6 mb-4';

//         animalCard.innerHTML = `
//             <div class="card">
//                 <img src="${animal.image}" class="card-img-top" alt="${animal.name} Image" onclick="playSound('${animal.sound}')" tabindex="0">
//                 <div class="card-body">
//                     <h5 class="card-title" onclick="location.href = 'animals/${id}'" role="button" tabindex="0">${animal.name}</h5>
//                 </div>
//             </div>
//         `;
        
//         animalGrid.appendChild(animalCard);
//     });
// }

// // Initial rendering of all animals
// (async function() {
//     try {
//         const animalsResponse = await fetch('/animals');
//         cachedAnimals = await animalsResponse.json();
//         renderAnimals(cachedAnimals);
//     } catch (error) {
//         console.error('Error fetching animal data:', error);
//     }
// })();

