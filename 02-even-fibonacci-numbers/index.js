// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
let a = 1;
let b = 2;

let sum = 0;

while (a < 4000000) {
    if (a % 2 === 0) {
        sum += a;
    }
    [a, b] = [b, a + b];
}

console.log(sum);