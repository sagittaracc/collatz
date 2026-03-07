const k = 5;

const is_even = (x) => x % 2 === 0;
const is_odd = (x) => !is_even(x);

const harut = (x) => {
    if (is_odd(x)) {
        return k * x + 1;
    } else {
        let m = k - 1;
        while (m >= 2) {
            if (x % m === 0) return x / m;
            m -= 2;
        }
    }
}

const iterationLimit = 1e6;

for (let x0 = 2, cx0 = x0; x0 <= 100000; x0++) {
    let iterationCount = 0;

    while (true) {
        if (iterationCount > iterationLimit) {
            console.log('The limit reached for ', x0);
            process.exit(1);
        }
    
        if (cx0 === 1) {
            console.log('Reached the number 1 for ', x0);
            break;
        }
    
        cx0 = harut(cx0);
    
        iterationCount++;
    }
}