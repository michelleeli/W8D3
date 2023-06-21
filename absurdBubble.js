
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
    rl.question(`is ${el1} greater than ${el2}?`, (answer) => {
        if (answer === 'yes') {
            console.log("true")
            callback(true);
        } else {
            callback(false);
        }
    });
  // Prompt user to tell you whether el1 > el2; pass true back to the
  // callback if true; else false.
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  let temp = null
  if (i === (arr.length - 1)) {
    // console.log(arr)
    // rl.close();
    // return arr

    outerBubbleSortLoop(madeAnySwaps);
  } else {

  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
    askIfGreaterThan(arr[i], arr[i+1], function (isGreaterThan) {
        if (isGreaterThan){
            temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            madeAnySwaps = true;
        }
        innerBubbleSortLoop(arr, ++i, madeAnySwaps, outerBubbleSortLoop); 
    });
  }
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
 
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
    outerBubbleSortLoop(true);
    function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    if (madeAnySwaps){
        innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
        sortCompletionCallback(arr);
        rl.close();
    }
    // `sortCompletionCallback`.
  }
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

// innerBubbleSortLoop([2,4,3,1], 0, false)

absurdBubbleSort([4,2,1], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  rl.close();
  debugger
});


