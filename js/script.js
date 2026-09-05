//Play audio on homepage

if(document.querySelector('#angel'))
{
    const angel = document.getElementById('angel');
    const track = new Audio('audio/vysarius-homepage-music.mp3');

    angel.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (track.paused) {
            track.play();
            angel.title = "Pause Audio";
        } else {
            track.pause();
            angel.title = "Play Audio";
        }
    });
}

//Replace square brackets for styling reasons

var elements = new Array(
    ".direction",
    ".scene-heading",
    ".setting"
);

elements.forEach(element => {
    if(document.querySelector(element))
    {
        queriedElements = document.querySelectorAll(element);
        queriedElements.forEach(queriedElement => {
            queriedElement.innerHTML = queriedElement.innerHTML.replaceAll("[", "<span class=\"lb\">[</span>");
            queriedElement.innerHTML = queriedElement.innerHTML.replaceAll("]", "<span class=\"rb\">]</span>");
        });
    }
});

// Hamburger Menu
hamburgerButton = document.querySelector('#hamburger .button');
hamburgerUL = document.querySelector('#hamburger ul');
hamburgerOpenButton = document.querySelector('#hamburger .open-button');
hamburgerCloseButton = document.querySelector('#hamburger .close-button');
hamburgerOpen = false;

if(document.querySelector('#hamburger'))
{
    hamburgerButton.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("clicked");
            hamburgerOpen = !hamburgerOpen;
            //console.log(hamburgerOpen);
            if(hamburgerOpen) {
                hamburgerUL.style.display = "block";
                hamburgerOpenButton.style.display = "none";
                hamburgerCloseButton.style.display = "block";
            }else{
                hamburgerUL.style.display = "none";
                hamburgerOpenButton.style.display = "block";
                hamburgerCloseButton.style.display = "none";
            }

    });
}

//Audio PLayer
if(document.querySelector('.audio-player .playlist')) {
    audioElement = document.querySelector('.audio-player audio');
    tracks = document.querySelectorAll(".audio-player .track a");
    //select first (active) track
    activeTrack = document.querySelector(".audio-player .active");
    isPlaying = false;

    audioElement.onplaying = function() {
        isPlaying = true;
    };
    audioElement.onpause = function() {
        isPlaying = false;
    };

    tracks.forEach(track => {
        track.addEventListener('click', (e) => {
            e.preventDefault();

            previousTrack = activeTrack;
            activeTrack = track.parentElement;

            if(activeTrack != previousTrack) {
                previousTrack.classList.remove('active');
                activeTrack.classList.add('active');
                audioElement.src = activeTrack.querySelector('a').href;

                audioElement.addEventListener("canplay", (event) => { 
                    audioElement.play();
                })
            }else{
                isPlaying ? audioElement.pause() : audioElement.play();
            }
        });
    });
}