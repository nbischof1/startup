/* Niels Bischof, 2013-06-25 */

function isPrime(number) {
    if(number<2) return false;
    var max = Math.sqrt(number);
    for(j=2; j<=max; j++) {
        if(number%j == 0){
            return false;
        }
    }
    return true;
}

primes = new Array();
for(i=1; i<=100; i++) {
    if(isPrime(i)){
        primes.push(i);
    }
}
console.log(''+primes);

