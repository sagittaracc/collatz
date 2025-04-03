const f1 = (n) => n / 2;
const f2 = (n) => n + 1;
const f = (n) => n % 2 === 0 ? f1(n) : f2(n);

for (let number = 1; number <= 1000000; number++) {
    collatz(number);
}

function collatz(number) {
    let iterations = 0;
    while (number !== 1 && iterations < 1000) {
        number = f(number);
        iterations++;
    }
}

function modExp(base, exp, mod) {
    let result = 1;
    base = base % mod;
    while (exp > 0) {
        if (exp % 2 === 1) {
            result = (result * base) % mod;
        }
        exp = Math.floor(exp / 2);
        base = (base * base) % mod;
    }
    return result;
}
