/**
 * Meditation App Code Along with DevEd
 * Code courtesy of Dev Ed: https://www.youtube.com/watch?v=oMBXdZzYqEk&t=562s
 * used for styling practice and to gain experience with creating elements on the
 * html page.
 */

const app = () => {
    const song = document.querySelector(".song");
    const play = document.querySelector(".play");
    const outline = document.querySelector(".moving-outline circle");
    const video = document.querySelector(".vid-container video");

    // sounds

    const sounds = document.querySelectorAll(".sound-picker button");

    // time display

    const timeDisplay = document.querySelector(".time-display");
    const timeSelect = document.querySelectorAll(".time-select button");

    // get length of the circle outline

    const outlineLength = outline.getTotalLength();
    console.log(outlineLength);

    // duration

    let fakeDuration = 600;

    // used to animate the circle on the display eventually.

    outline.style.strokeDasharray = outlineLength;

    outline.style.strokeDashoffset = outlineLength;

    // choose different sounds

    sounds.forEach( sound => {
        sound.addEventListener("click", function() {
            song.src = this.getAttribute("data-sound");
            video.src = this.getAttribute("data-video");
            checkPlaying(song);
        })
    })
    // play the sound

    play.addEventListener("click", () => {
        checkPlaying(song);
    })

    // here we understand which duration the user has selected.

    timeSelect.forEach( option => {
        option.addEventListener("click", function() {
            fakeDuration = this.getAttribute("data-time");
            timeDisplay.textContent = `${Math.floor(fakeDuration/60)}:${Math.floor(fakeDuration % 60)}`;

        })
    })

    // create function to stop and play the sounds and change the icon

    const checkPlaying = (song) => {
        if (song.paused) {
            song.play();
            video.play();
            play.src = "./svg/pause.svg";
        } else {
            song.pause();
            video.pause();
            play.src = "./svg/play.svg";
        }
    };

    // function to animate movement of the circle on the display
    song.ontimeupdate = () => {
        let currentTime = song.currentTime;
        let elapsed = fakeDuration - currentTime;
        let seconds = Math.floor(elapsed % 60);
        let minutes = Math.floor(elapsed / 60);
        
        // animate the circle

        let progress = outlineLength - (currentTime/fakeDuration) * outlineLength;
        outline.style.strokeDashoffset = progress;

        // update the time on the display

        timeDisplay.textContent = `${minutes}:${seconds}`;
// when time is up, reset the time and stop the video and sound
        if (currentTime >= fakeDuration){
            song.pause();
            song.currentTime = 0;
            play.src = "./svg/play.svg";
            video.pause();
        }
    }
};

app();