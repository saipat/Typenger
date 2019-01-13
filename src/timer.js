
class Timer {
    constructor() {
        this.time = 5;
        this.interval = null;
    }

    start(callbackFn) {
        this.time = 5;
        this.interval = setInterval(() => {
            --this.time;
            document.querySelector('#seconds').innerHTML = this.time + " ";
            if (this.time === 0) {
                console.log("this.time ---->", this.time);
                clearInterval(this.interval);
                callbackFn();
            }
        }, 1000);
    }

    stop() {
        clearInterval(this.interval);
    }
}



export default Timer;