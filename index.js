const k = 25n;

const make_even = x => k * x + 1n;
const is_even = (x) => x % 2n === 0n;
const is_odd = (x) => !is_even(x);

const harut = (x) => {
    let m = k - 1n;
    while (m >= 2n) {
        if (x % m === 0n) return x / m;
        m -= 1n;
    }

    return make_even(x);
}

const iterationLimit = 1000000;

const startX = BigInt('2147483647');
const endX = BigInt('2147483647');

for (let x0 = startX; x0 <= endX; x0++) {
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
        console.log(cx0);
    
        iterationCount++;
    }
}