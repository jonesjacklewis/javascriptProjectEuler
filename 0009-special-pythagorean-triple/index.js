// a^2 + b^2 = c^2
// a + b + c = 1,000

const target = 1_000;
const triple = [];

for(let a = 3; a < target; a++){
    for(let b = 4; b < target; b++){

        let c_squared = (a**2) + (b**2);
        let c = Math.sqrt(c_squared);

        if(
            c % 1 == 0 &&
            a + b + c == target &&
            a < b  && b < c
        ){
            triple["a"] = a;
            triple["b"] = b;
            triple["c"] = c;
        }

    }
}



const abc = Object.values(triple).reduce((prev, cur) => prev * cur, 1);

console.log(abc);