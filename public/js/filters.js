
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
