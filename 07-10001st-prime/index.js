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

function getNthPrime(n){

    if(n < 1){return null;}
    if(n == 1){return 2};

    const primes = [2];

    let toCheck = 3;

    while(primes.length != n){
        if(isPrime(toCheck)){
            primes.push(toCheck);
        }

        toCheck += 1;
    }

    return primes[primes.length - 1];


}

console.log(getNthPrime(10001));