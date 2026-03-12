const k = 16807n;

const make_even = x => k * x + 1n;
const is_even = (x) => x % 2n === 0n;
const is_odd = (x) => !is_even(x);
const is_prime = (x) => {
    if (x <= 1n) return false;
    if (x <= 3n) return true;
    if (x % 2n === 0n || x % 3n === 0n) return false;
    for (let i = 5n; i * i <= x; i += 6n) {
        if (x % i === 0n || x % (i + 2n) === 0n) return false;
    }

    return true;
}

const harut = (x) => {
    let m = k - 1n;
    while (m >= 2n) {
        if (x % m === 0n) return x / m;
        m -= 1n;
    }

    return make_even(x);
}

const iterationLimit = 1000000;

const startX = BigInt('20549');
const endX = BigInt('1000000');

for (let x0 = startX; x0 <= endX; x0++) {
    if (!is_prime(x0)) continue;

    let cx0 = x0;
    let iterationCount = 0;

    while (true) {
        if (iterationCount > iterationLimit) {
            console.log('The limit reached for ', x0.toString());
            process.exit(1);
            // break;
        }

        if (cx0 === 1n) {
            console.log('Reached the number 1 for ', x0.toString(), ' count', iterationCount);
            break;
        }

        cx0 = harut(cx0);

        iterationCount++;
    }
}