document.addEventListener('DOMContentLoaded', () => {
    let preset = 0;
    let loaded = false;

    let audio = document.querySelector('audio');
    let play = document.querySelector('.play');    

    audio.addEventListener('play', playTrack);
    audio.addEventListener('pause', pauseTrack);

    play.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playTrack();
        } else {
            audio.pause();
            pauseTrack();
        }
    });

    audio.addEventListener('ended', () => {
        pauseTrack();
    });

    function playTrack() {
        play.querySelector('.pause-icon').style.display = "block";
        play.querySelector('.play-icon').style.display = "none";
    }

    function pauseTrack() {
        play.querySelector('.pause-icon').style.display = "none";
        play.querySelector('.play-icon').style.display = "block";
    }
});
