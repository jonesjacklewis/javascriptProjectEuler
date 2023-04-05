function isPalindromic(num) {
    const strN = `${num}`;
    const revStrN = strN.split("").reverse().join("");
    return strN == revStrN;
}

let smallestProduct = 100 * 100;
let largestProduct = 999 * 999;


console.log(`smallestProduct = ${smallestProduct}`);
console.log(`largestProduct = ${largestProduct}`);


let largestPalindromicProduct = -1;

while (smallestProduct <= largestProduct) {
    if (
        isPalindromic(smallestProduct) &&
        smallestProduct > largestPalindromicProduct
        ) {
        largestPalindromicProduct = smallestProduct;
    }

    smallestProduct += 1;
}


console.log(`largestPalindromicPrime = ${largestPalindromicProduct}`);