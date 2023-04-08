function isPalindromic(n) {

    const rev = `${n}`.split('').reverse().join('');

    return `${n}` == `${rev}`;
}



let product = 0;
let max = -1;

for(let multiplier = 999; multiplier >= 100; multiplier--){
    for(let multiplicand = multiplier; multiplicand >= 100; multiplicand--){
        product = multiplier * multiplicand;

        if(
            isPalindromic(product) &&
            max < product
        ){
            max = product;
        }

    }
}


console.log(max);