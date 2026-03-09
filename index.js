const k = 9n;

const make_even = x => k * x + 1n;
const is_even = (x) => x % 2n === 0n;
const is_odd = (x) => !is_even(x);
const isPowerOfTwo = (x) => x > 0n && (x & (x - 1n)) === 0n;

const harut = (x) => {
    let m = k - 1n;
    while (m >= 2n) {
        if (x % m === 0n) return x / m;
        m -= 1n;
    }

    return make_even(x);
}

const iterationLimit = 1e3;

const startX = BigInt(2);
const endX = BigInt(1e6);

for (let x0 = startX; x0 <= endX; x0++) {
    let cx0 = x0;
    let iterationCount = 0;

    while (true) {
        if (iterationCount > iterationLimit) {
            console.log('The limit reached for ', x0.toString());
            process.exit(1);
        }
    
        if (cx0 === 1n) {
        // if (isPowerOfTwo(cx0)) {
            // console.log('Reached the number 1 for ', x0.toString(), ' count', iterationCount);
            break;
        }
    
        cx0 = harut(cx0);
        // console.log(cx0);
        // cx0 = make_even(cx0);
    
        iterationCount++;
    }
}