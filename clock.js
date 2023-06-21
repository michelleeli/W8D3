class Clock {
    constructor() {
        // 1. Create a Date object.
        const date = new Date();
        // 2. Store the hours, minutes, and seconds.
        [this.hour, this.minutes, this.seconds] = [
            date.getHours(),
            date.getMinutes(),
            date.getSeconds()
        ]
        // 3. Call printTime.
        this.printTime([this.hour, this.minutes, this.seconds])
        // 4. Schedule the tick at 1 second intervals.
        const boundTick = this._tick.bind(this)
        setInterval(function () { boundTick([this.hour, this.minutes, this.seconds]) }, 1000);
    }

    printTime(time) {
        // Format the time in HH:MM:SS
        for (let i = 0; i < 3; i++) {
            if (time[i] < 10) {
                time[i] = `0${time[i]}`
            }
        }
        console.log(`${time[0]}:${time[1]}:${time[2]}`)
        // Use console.log to print it.
    }

    _tick() {
        // 1. Increment the time by one second.
        debugger
        // this.hour = time[0];
        // this.minutes = time[1];
        // this.seconds = time[2];
        this.seconds = this.seconds + 1;

        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes += 1;
        };
        if (this.minutes === 60) {
            this.minutes = 0;
            this.hour += 1;
        }
        if (this.hour === 24) {
            this.hour = 0;
        }
        // 2. Call printTime.
        return this.printTime([this.hour, this.minutes, this.seconds]);
    }
}

const clock = new Clock();
