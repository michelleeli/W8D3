Function.prototype.myBind = function (context) {
    let scope = context;
    let holdThis = this;
    return () => {
        return holdThis.apply(scope)
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