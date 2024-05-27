//var to keep track of currently playing audio
let currentAudio = null;
//var to store ID of timeout used to stop the audio after 10secs
let timeoutId = null;

// function takes in the path to audio file to be played
function playSound(sound) {
    // Check if animal sound is alr playing and if its the same as the one being requested. if so, stop and reset the audio 
    if (currentAudio && !currentAudio.paused && currentAudio.src === new URL(sound, document.baseURI).href) {
        currentAudio.pause(); // pause audio
        currentAudio.currentTime = 0; //reset playback position
        clearTimeout(timeoutId); //clear 10sec timeout
        currentAudio = null; // reset var to indicate no audio is currently playing
    //else, stop any animal sound that is playing, reset timeout before playing the newly selected animal sound
    } else {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            clearTimeout(timeoutId);
        }

        // Create a new Audio object and play it
        currentAudio = new Audio(sound);
        currentAudio.play();

        // Set a timeout to stop the audio after 10 seconds (10k millisecs)
        timeoutId = setTimeout(() => {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
                currentAudio = null; // Reset currentAudio
            }
        }, 10000);
    }
}


