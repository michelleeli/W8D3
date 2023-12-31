Function.prototype.myBind = function (context) {
        // let holdThis = this;  // only used if ES5 aka test next week
    return () => {  //test version: return function ()  { for ES5
        return this.apply(context);  //return holdThis.apply(context);
    };
}

//test version, bind with 2 inputs

Function.prototype.myBind = function (context, ...bindArgs) {
    const that = this;
    return function (...callArgs) {
        return that.apply(context, callArgs.concat(bindArgs))
    }

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