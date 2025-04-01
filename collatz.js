const f1 = (n) => n / 2;
const f2 = (n) => 3 * n + 1;
const f = (n) => n % 2 === 0 ? f1(n) : f2(n);

while (f(number) !== 1) {
    number = f(number);
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
