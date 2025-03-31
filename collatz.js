const numbers = [8];

const f1 = (n) => n * 2;
const f2 = (n) => (n - 1) / 3;

const interval = setInterval(getNextNumber, 100);

function unique(value, index, array) {
    return array.indexOf(value) === index;
}

function getNextNumber() {
    const currNumber = numbers.at(-1)

    numbers.push(
        Number.isInteger(f2(currNumber))
            ? f2(currNumber)
            : f1(currNumber)
    );

    const len1 = numbers.length;
    const len2 = numbers.filter(unique).length;

    if (len1 !== len2) {
        clearInterval(interval);
    }

    console.info(numbers.at(-1));
}
