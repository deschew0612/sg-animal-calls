const animals = [
    { 
        name: 'Ashy Tailorbird', 
        image: '/images/ashy_tailorbird.jpeg', 
        sound: '/sounds/ashy_tailorbird.wav',
        habitat: ['All','Mangrove/Coastal'],
        imageLink: 'https://www.flickr.com/photos/lipkee/462771353',
        soundLink: 'https://xeno-canto.org/796734'
    }, 
    { 
        name: 'Asian Koel', 
        image: '/images/koel.jpeg', 
        sound: '/sounds/koel.wav',
        habitat: ['All','Forest/Park', 'Urban'],
        imageLink: 'https://animalia.bio/asian-koel',
        soundLink: 'https://xeno-canto.org/893845'
    },
    { 
        name: 'Asian Toad', 
        image: '/images/asian_toad.jpeg', 
        sound: '/sounds/asian_toad.ogg',
        habitat: ['All','Forest/Park', 'Urban'],
        imageLink: 'https://animalia.bio/duttaphrynus-melanostictus',
        soundLink: 'https://soundcloud.com/user-594921597/duttaphrynus-melanostictus?ref=clipboard&p=a&c=0&si=76dcca8891094444a02e7b669f879995&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
    },
    { 
        name: 'Banded Bullfrog', 
        image: '/images/banded_bullfrog.jpeg', 
        sound: '/sounds/banded_bullfrog.ogg',
        habitat: ['All','Forest/Park', 'Urban'],
        imageLink: 'https://animalia.bio/banded-bullfrog',
        soundLink: 'https://soundcloud.com/user-594921597/kaloula-pulchra-banded-bullfrog'
    },
    { 
        name: 'Changeable Hawk Eagle', 
        image: '/images/changeable_hawk_eagle.jpeg', 
        sound: '/sounds/changeable_hawk_eagle.mp3',
        habitat: ['All','Forest/Park'],
        imageLink: 'https://commons.wikimedia.org/wiki/File:Changeable_Hawk-Eagle_%28Spizaetus_cirrhatus%29_-_Flickr_-_Lip_Kee.jpg',
        soundLink: 'https://xeno-canto.org/747383'
    },
    { 
        name: 'Cicada', 
        image: '/images/cicada.jpeg', 
        sound: '/sounds/cicada.mp3',
        habitat: ['All','Forest/Park', 'Urban','Mangrove/Coastal'],
        imageLink: 'https://www.youtube.com/watch?v=q3IkTxfv83k',
        soundLink: 'Self-recorded'
    },
    { 
        name: 'Collared Kingfisher', 
        image: '/images/collared_kingfisher.jpeg', 
        sound: '/sounds/collared_kingfisher.mp3',
        habitat: ['All','Forest/Park', 'Urban','Mangrove/Coastal'],
        imageLink: 'https://commons.wikimedia.org/wiki/File:KIRKAMON-WHITE_COLLARED_KINGFISHER.jpg',
        soundLink: 'https://xeno-canto.org/896209'
    },
    { 
        name: 'Coppersmith Barbet', 
        image: '/images/coppersmith_barbet.jpeg', 
        sound: '/sounds/coppersmith_barbet.mp3',
        habitat: ['All','Forest/Park', 'Urban'],
        imageLink: 'https://animalia.bio/coppersmith-barbet',
        soundLink: 'https://xeno-canto.org/671743'
    },
    { 
        name: 'Copper-Throated Sunbird', 
        image: '/images/copper-throated_sunbird.jpeg', 
        sound: '/sounds/copper-throated_sunbird.mp3',
        habitat: ['All','Mangrove/Coastal'],
        imageLink: 'https://commons.wikimedia.org/wiki/File:Copper-throated_Sunbird.jpg',
        soundLink: 'https://xeno-canto.org/715543'
    },
    { 
        name: 'Eurasian Whimbrel', 
        image: '/images/eurasian_whimbrel.jpeg', 
        sound: '/sounds/eurasian_whimbrel.mp3',
        habitat: ['All','Mangrove/Coastal'],
        imageLink: 'https://animalia.bio/eurasian-whimbrel',
        soundLink: 'https://xeno-canto.org/715548'
    }, 
    { 
        name: 'Four-Ridge Toad', 
        image: '/images/four-ridge toad.png', 
        sound: '/sounds/four-ridge_toad.ogg',
        habitat: ['All','Forest/Park'],
        imageLink: 'https://soundcloud.com/user-594921597/ingerophrynus-quadriporcatus?in=user-594921597/sets/frogs-of-singapore',
        soundLink: 'https://soundcloud.com/user-594921597/ingerophrynus-quadriporcatus?in=user-594921597/sets/frogs-of-singapore'
    },
    { 
        name: "Günther's Frog", 
        image: '/images/guenthers_frog.jpeg', 
        sound: '/sounds/guenthers_frog.ogg',
        habitat: ['All','Forest/Park','Urban'],
        imageLink: 'https://www.flickr.com/photos/96826734@N08/36940689713/',
        soundLink: 'https://soundcloud.com/user-594921597/sylvirana-guentheri-gunthers-frog'
    },
    { 
        name: "Grey Heron", 
        image: '/images/grey_heron.jpeg', 
        sound: '/sounds/grey_heron.mp3',
        habitat: ['All','Mangrove/Coastal'],
        imageLink: 'https://www.flickr.com/photos/joxeankoret/26093587062',
        soundLink: 'https://xeno-canto.org/842543'
    },
    { 
        name: "House Crow", 
        image: '/images/house_crow.jpeg', 
        sound: '/sounds/house_crow.mp3',
        habitat: ['All','Forest/Park', 'Urban','Mangrove/Coastal'],
        imageLink: 'https://animalia.bio/house-crow',
        soundLink: 'https://xeno-canto.org/677302'
    },
    { 
        name: 'Katydid', 
        image: '/images/katydid.jpeg', 
        sound: '/sounds/katydid.mp3',
        habitat: ['All','Forest/Park'],
        imageLink: 'https://commons.wikimedia.org/wiki/File:Green_Katydid_%28Tettigoniidae%29_%288294799540%29.jpg',
        soundLink: 'https://www.youtube.com/watch?v=CNCTO_YKiMU'
    },
    { 
        name: 'Long-Tailed Macaque', 
        image: '/images/long-tailed_macaque.jpeg', 
        sound: '/sounds/long-tailed_macaque.mp3',
        habitat: ['All','Forest/Park'],
        imageLink: 'https://www.animalia.bio/index.php/long-tailed-macaque',
        soundLink: 'https://www.ecologyasia.com/verts/mammals/long-tailed_macaque.htm'
    },
    { 
        name: 'Oriental Pied Hornbill', 
        image: '/images/oriental_pied_hornbill.jpeg', 
        sound: '/sounds/oriental_pied_hornbill.wav',
        habitat: ['All','Forest/Park','Urban'],
        imageLink: 'https://animalia.bio/index.php/oriental-pied-hornbill',
        soundLink: 'https://xeno-canto.org/829417'
    },
    { 
        name: 'Pistol Shrimp', 
        image: '/images/pistol_shrimp.jpeg', 
        sound: '/sounds/pistol_shrimp.mp3',
        habitat: ['All','Mangrove/Coastal'],
        imageLink: 'https://www.flickr.com/photos/wildsingapore/10591216793',
        soundLink: 'https://www.youtube.com/watch?v=fddhCHanZO0'
    },
    { 
        name: 'Plantain Squirrel', 
        image: '/images/plantain-squirrel.jpeg', 
        sound: '/sounds/plantain-squirrel.mp3',
        habitat: ['All','Forest/Park', 'Urban'],
        imageLink: 'https://animalia.bio/plantain-squirrel',
        soundLink: 'https://www.youtube.com/watch?v=b2dJANP7ukw&t=25s'
    },
    { 
        name: 'Red Junglefowl', 
        image: '/images/red_junglefowl.jpeg', 
        sound: '/sounds/red_junglefowl.mp3',
        habitat: ['All','Forest/Park', 'Urban'],
        imageLink: 'https://animalia.bio/red-junglefowl',
        soundLink: 'https://xeno-canto.org/689265'
    },
    { 
        name: 'Slender Squirrel', 
        image: '/images/slender-squirrel.jpeg', 
        sound: '/sounds/slender-squirrel.mp3',
        habitat: ['All','Forest/Park'],
        imageLink: 'https://www.flickr.com/photos/lipkee/3632982640',
        soundLink: 'https://www.youtube.com/watch?v=lsYOBoFarTA'
    },
    { 
        name: 'Smooth-Coated Otter', 
        image: '/images/otter.jpeg', 
        sound: '/sounds/otter.mp3',
        habitat: ['All','Mangrove/Coastal'],
        imageLink: 'https://animalia.bio/smooth-coated-otter',
        soundLink: 'https://www.youtube.com/watch?app=desktop&v=eLGHs7WtFRs'
    }, 
    { 
        name: 'Stork-Billed Kingfisher', 
        image: '/images/stork-billed_kingfisher.jpeg', 
        sound: '/sounds/stork-billed_kingfisher.mp3',
        habitat: ['All','Mangrove/Coastal'],
        imageLink: 'https://www.flickr.com/photos/lipkee/455158890',
        soundLink: 'https://xeno-canto.org/870706'
    }, 
    { 
        name: 'White-Bellied Sea Eagle', 
        image: '/images/white-bellied_sea-eagle.jpeg', 
        sound: '/sounds/white-bellied_sea_eagle.mp3',
        habitat: ['All','Mangrove/Coastal'],
        imageLink: 'https://www.flickr.com/photos/lipkee/3299982388',
        soundLink: 'https://xeno-canto.org/706575'
    }, 
];

module.exports = {animals}