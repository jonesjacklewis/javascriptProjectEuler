// Get GCD of an array of numbers
// get LCM of array of numbers

Set.prototype.intersect = function (set2) {
    return new Set([...this].filter(i => set2.has(i)));
}


function isPrime(n) {
    if (n < 2) { return false; }
    if (n == 2) { return true; }
    if (n % 2 == 0) { return false; }


    const point = Math.ceil(Math.sqrt(n)) + 1;

    for (let i = 3; i <= point; i += 2) {
        if (
            n % i == 0 &&
            n != i
        ) {
            return false;
        }
    }

    return true;
}


function primeFactoisation(n) {
    const primeFactors = [];

    let prime = 2;

    while (n != 1) {
        if (
            n % prime == 0 &&
            isPrime(prime)
        ) {
            primeFactors.push(prime);
            n /= prime;
            prime = 2;
        } else {
            if (prime == 2) {
                prime = 3;
            } else {
                prime += 2;
            }
        }
    }


    return primeFactors;

}


function getArrayInRange(inclusiveStart, inclusiveEnd) {
    return Array.from({ length: inclusiveEnd }, (v, k) => k + 1).filter(i => i >= inclusiveStart);
}

function primeFactoisationArray(arr) {
    return arr.map(item => primeFactoisation(item))
}

function getUniquePrimeFactors(arr) {
    const primeFactors = new Set();

    // flatten 2d array
    const flatArray = arr.reduce((acc, val) => acc.concat(val), []);

    for (let item of flatArray) {
        if (!primeFactors.has(item)) {
            primeFactors.add(item);
        }
    }

    return primeFactors;

}

function getMostOccurrencesOfValueInArray(parentArray, value) {


    let numberOfOccurrences = 0;

    for (let subarray of parentArray) {
        if (subarray.includes(value)) {
            let count = subarray.filter(item => item == value).length;

            if (count > numberOfOccurrences) {
                numberOfOccurrences = count;
            }
        }
    }

    return numberOfOccurrences;

}

const testArray = getArrayInRange(1, 20);
const primeFactorsArray = primeFactoisationArray(testArray);
const uniquePrimeFactors = getUniquePrimeFactors(primeFactorsArray);

const primeFactorCount = {};

for (let primeFactor of uniquePrimeFactors) {
    primeFactorCount[primeFactor] = getMostOccurrencesOfValueInArray(primeFactorsArray, primeFactor);
}

let lcm = 1;

for (let factor of Object.keys(primeFactorCount)) {
    let count = primeFactorCount[factor];


    lcm *= (factor ** count);
}

console.log(lcm);