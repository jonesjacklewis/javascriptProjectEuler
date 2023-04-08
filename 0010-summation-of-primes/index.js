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

function getSumOfPrimesBelowN(n){
    const primes = [];

    if(n < 2){
        return primes;
    }

    primes.push(2);

    if(n < 3){
        return primes;
    }

    let toCheck = 3;

    while(toCheck <= n){
        if(isPrime(toCheck)){
            primes.push(toCheck);
        }

        toCheck += 2;
    }

    return primes.reduce((prev, cur) => prev + cur, 0);


}

console.log(getSumOfPrimesBelowN(2_000_000));