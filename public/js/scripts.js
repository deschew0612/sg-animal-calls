let currentAudio = null;

function playSound(soundPath) {
    // Stop the currently playing audio, if any
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    
    // Create a new audio object and play the sound
    currentAudio = new Audio(soundPath);
    currentAudio.play();
    
}

