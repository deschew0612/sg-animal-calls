const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Sample data
const animals = [
    { 
        name: 'Smooth-Coated Otter', 
        image: '/images/otter.jpeg', 
        sound: '/sounds/otter.mp3',
        // location: 'They seem to be everywhere! See https://www.facebook.com/OtterWatch/'
        // funFacts: 'There are two types in SG: smooth-coated otters on the mainland, small-clawed otters on the islands' 
    },
    { 
        name: 'Asian Male Koel', 
        image: '/images/koel.jpeg', 
        sound: '/sounds/koel.wav' 
        // location: 'They seem to be everywhere!'
        // funFacts: "They are parasites that lay eggs in the nests of other birds, which provide parental care until the chick is able to fly. The chick may even force the host's eggs or chicks out of the nest!"
    },
    { 
        name: 'Greater Racket-Tailed Drongo', 
        image: '/images/drongo.jpeg', 
        sound: '/sounds/otter.mp3',
        // location: 'They seem to be everywhere! See https://www.facebook.com/OtterWatch/'
        // funFacts: 'There are two types in SG: smooth-coated otters on the mainland, small-clawed otters on the islands' 
    },
    { 
        name: 'Straw-Headed Bulbul', 
        image: '/images/strawheaded_bulbul.jpeg', 
        sound: '/sounds/koel.wav' 
        // location: 'They seem to be everywhere!'
        // funFacts: "They are parasites that lay eggs in the nests of other birds, which provide parental care until the chick is able to fly. The chick may even force the host's eggs or chicks out of the nest!"
    },
    { 
        name: 'Hill Mynah', 
        image: '/images/hill_mynah.jpeg', 
        sound: '/sounds/otter.mp3',
        // location: 'They seem to be everywhere! See https://www.facebook.com/OtterWatch/'
        // funFacts: 'There are two types in SG: smooth-coated otters on the mainland, small-clawed otters on the islands' 
    },
    { 
        name: 'Coppersmith Barbet', 
        image: '/images/coppersmith_barbet.jpeg', 
        sound: '/sounds/koel.wav' 
        // location: 'They seem to be everywhere!'
        // funFacts: "They are parasites that lay eggs in the nests of other birds, which provide parental care until the chick is able to fly. The chick may even force the host's eggs or chicks out of the nest!"
    },
    // Add more animals as needed
];

app.get('/', (req, res) => {
    res.render('index', { animals });
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});