Function.prototype.myBind = function (context) {
        // let holdThis = this;  // only used if not using arrow function
    return () => {
        return this.apply(context)
    };
}


class Lamp {
    constructor() {
        this.name = "a lamp";
    }
}

const turnOn = function () {
    console.log("Turning on " + this.name);
};

const lamp = new Lamp();
const light = new Lamp();

const myBoundTurnOn = turnOn.myBind(lamp);

myBoundTurnOn()