function isPrime(num) {
    if(num === 1) return true;
    // for(let i = 2; i<num;i++) {
    //     if(num % i === 0) {
    //         return false
    //     }
    // }
    // return true;
    let temp = parseInt(Math.sqrt(num));
    for(let i = 2;i<=temp; i++) {
        if(num % i === 0) {
            return false
        }
    }
    return true;
}
console.log(isPrime(24123));
console.log(isPrime(5));