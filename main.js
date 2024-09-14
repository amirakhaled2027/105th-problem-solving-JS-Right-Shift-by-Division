//Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.

function shiftToRight(num1, num2) {
    const secondNum = Math.pow(2, num2);
    const result = num1 / secondNum;
    const resultInt = Math.floor(result)

    return resultInt;
}

console.log(shiftToRight(80, 3));
console.log(shiftToRight(-24, 2));
console.log(shiftToRight(-5, 1));
console.log(shiftToRight(4666, 6));
console.log(shiftToRight(3777, 6));
console.log(shiftToRight(-512, 10));
