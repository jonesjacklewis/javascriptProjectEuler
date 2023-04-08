function isPrime(n){
    if(n < 2){return false;}
    if(n == 2){return true;}
    if(n % 2 == 0){return false;}

    const sqrt = Math.ceil(Math.sqrt(n)) + 1;

    for(let i = 3; i < sqrt; i += 2){
        if(n % i == 0){
            return false;
        }
    }

    return true;
}

let largestPrimeFactor = 2;
let number = 600851475143;

while(number > 1){
    if(
        isPrime(largestPrimeFactor) &&
        number % largestPrimeFactor == 0
    ){
        number = number / largestPrimeFactor;
    }else{
        largestPrimeFactor += 1;
    }
}

console.log(largestPrimeFactor);