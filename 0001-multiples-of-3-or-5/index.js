let sum = 0;
const number = 1000;

for(let i = 3; i < number; i++){
    
    if(
        i % 3 == 0 ||
        i % 5 == 0
    ){
        sum += i;
    }
}

console.log(sum);