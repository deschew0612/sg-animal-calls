let currentAudio = null;
let timeoutId = null;

function playSound(sound) {
    // Check if the audio is already playing and if it's the same sound
    if (currentAudio && !currentAudio.paused && currentAudio.src === new URL(sound, document.baseURI).href) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        clearTimeout(timeoutId);
        currentAudio = null; // Reset currentAudio
    } else {
        // If another audio is playing, stop it first
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            clearTimeout(timeoutId);
        }

        // Create a new Audio object and play it
        currentAudio = new Audio(sound);
        currentAudio.play();

        // Set a timeout to stop the audio after 10 seconds
        timeoutId = setTimeout(() => {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
                currentAudio = null; // Reset currentAudio
            }
        }, 10000);
    }
}

/*auto-complete function for search bar??*/

// https://medium.com/@nguynvithng_34102/making-a-simple-autocomplete-search-box-639b26a372cd