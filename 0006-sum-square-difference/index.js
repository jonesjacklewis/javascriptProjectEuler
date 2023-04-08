function getArrayInRange(inclusiveStart, inclusiveEnd) {
    return Array.from({ length: inclusiveEnd }, (v, k) => k + 1).filter(i => i >= inclusiveStart);
}

function getSumSquareArray(arr){
    return arr.reduce((prev, cur) => prev + (cur ** 2), 0);
}

function getSquareSumArray(arr){
    return arr.reduce((prev, cur) => prev + cur, 0) ** 2;
}

const oneHundredArray = getArrayInRange(1, 100);
const sumSquareArray = getSumSquareArray(oneHundredArray);
const squareSumArray = getSquareSumArray(oneHundredArray);
const difference = Math.abs(sumSquareArray - squareSumArray);

console.log(sumSquareArray);
console.log(squareSumArray);
console.log(difference);