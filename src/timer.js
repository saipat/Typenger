
class Timer {
    constructor() {
        this.time = 5;
        this.interval = null;
        this.timerEl = document.querySelector('#seconds');
    }

    start(callbackFn) {
        this.time = 5;
        this.interval = setInterval(() => {
            --this.time;
            this.timerEl.innerHTML = this.time + " ";
            if (this.time === 0) {
                console.log("this.interval ---->", this.interval);
                clearInterval(this.interval);
                callbackFn();
            }
        }, 1000);
    }

    stop() {
        console.log("Timer Stop", this.interval);
        clearInterval(this.interval);
        this.timerEl.innerHTML = 5 + " ";
    }
}



export default Timer;