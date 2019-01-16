
// class Sound {

//     constructor(context, buffer) {
//         this.context = context;
//         this.buffer = buffer;
//     }

//     setup() {
//         this.gainNode = this.context.createGain();
//         this.source = this.context.createBufferSource();
//         this.source.buffer = this.buffer;
//         this.source.connect(this.gainNode);
//         this.gainNode.connect(this.context.destination);

//         this.gainNode.gain.setValueAtTime(0.8, this.context.currentTime);
//     }

//     play() {
//         this.setup();
//         this.source.start(this.context.currentTime);
//     }

//     stop() {
//         var ct = this.context.currentTime + 0.5;
//         this.gainNode.gain.exponentialRampToValueAtTime(0.001, ct);
//         this.source.stop(ct);
//     }

// }

// const context = window.AudioContext || window.webkitAudioContext();

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
