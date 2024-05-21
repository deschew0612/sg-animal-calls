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
        description: 'some text',
        habitat: 'Mangrove/Coastal',
        type: 'Others'
    },
    { 
        name: 'Asian Koel', 
        image: '/images/koel.jpeg', 
        sound: '/sounds/koel.wav',
        habitat: ['Forest/Park', 'Urban'],
        type: 'Bird'
    },
    { 
        name: 'Coppersmith Barbet', 
        image: '/images/coppersmith_barbet.jpeg', 
        sound: '/sounds/coppersmith_barbet.mp3',
        habitat: ['Forest/Park', 'Urban'],
        type: 'Bird'
    },
    { 
        name: 'Collared Kingfisher', 
        image: '/images/collared_kingfisher.jpeg', 
        sound: '/sounds/collared_kingfisher.mp3',
        habitat: ['Forest/Park', 'Urban'],
        type: 'Bird'
    },
    { 
        name: 'Red Junglefowl', 
        image: '/images/red_junglefowl.jpeg', 
        sound: '/sounds/red_junglefowl.mp3',
        habitat: ['Forest/Park', 'Urban'],
        type: 'Bird'
    },
    { 
        name: 'Katydid', 
        image: '/images/katydid.jpeg', 
        sound: '/sounds/katydid.mp3',
        habitat: 'Forest/Park',
        type: 'Others'
    }
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

/* show sources.ejs when user clicks 'Sources'*/
app.get('/sources', (req, res) => {
    res.render('sources');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});