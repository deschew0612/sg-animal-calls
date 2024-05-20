const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Sample data

const animalnames = ['Smooth-Coated Otter', 'Male Asian Koel', 'Coppersmith Barbet']; 

const animals = [
    { 
        name: 'Smooth-Coated Otter', 
        image: '/images/otter.jpeg', 
        sound: '/sounds/otter.mp3',
        description: 'some text',
        // location: 'They seem to be everywhere! See https://www.facebook.com/OtterWatch/'
        // funFacts: 'There are two types in SG: smooth-coated otters on the mainland, small-clawed otters on the islands' 
    },
    { 
        name: 'Male Asian Koel', 
        image: '/images/koel.jpeg', 
        sound: '/sounds/koel.wav' 
        // location: 'They seem to be everywhere!'
        // funFacts: "They are parasites that lay eggs in the nests of other birds, which provide parental care until the chick is able to fly. The chick may even force the host's eggs or chicks out of the nest!"
    },
    { 
        name: 'Coppersmith Barbet', 
        image: '/images/coppersmith_barbet.jpeg', 
        sound: '/sounds/coppersmith_barbet.mp3' 
        // location: 'They seem to be everywhere!'
        // funFacts: 
    },
    { 
        name: 'Collared Kingfisher', 
        image: '/images/collared_kingfisher.jpeg', 
        sound: '/sounds/collared_kingfisher.mp3' 
        // location: 'They seem to be everywhere!'
        // funFacts: 
    },
    { 
        name: 'Red Junglefowl', 
        image: '/images/red_junglefowl.jpeg', 
        sound: '/sounds/red_junglefowl.mp3' 
        // location: 'They seem to be everywhere!'
        // funFacts: 
    },
    { 
        name: 'Katydid', 
        image: '/images/katydid.jpeg', 
        sound: '/sounds/katydid.mp3' 
        // location: 'They seem to be everywhere!'
        // funFacts: 
    },
    // { 
    //     name: 'Greater Racket-Tailed Drongo', 
    //     image: '/images/drongo.jpeg', 
    //     sound: '/sounds/otter.mp3',
    //     // location: 'They seem to be everywhere! See https://www.facebook.com/OtterWatch/'
    //     // funFacts: 
    // },
    // { 
    //     name: 'Straw-Headed Bulbul', 
    //     image: '/images/strawheaded_bulbul.jpeg', 
    //     sound: '/sounds/koel.wav' 
    //     // location: 'They seem to be everywhere!'
    //     // funFacts: 
    // },
    // { 
    //     name: 'Hill Mynah', 
    //     image: '/images/hill_mynah.jpeg', 
    //     sound: '/sounds/otter.mp3',
    //     // location: 'They seem to be everywhere! See https://www.facebook.com/OtterWatch/'
    //     // funFacts: 
    // },

    // Add more animals as needed
];

/* show index.ejs with animal grid */
app.get('/', (req, res) => {
    res.render('index', { animals });
});

/* show animal.ejs based on animal id clicked*/
app.get('/animal/:id', (req, res) => {
    const { id } = req.params

    const animal = animals[id]

    res.render('animal', { animal });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});