let number = 5674;

function countSum(num) {
    let result = String(num)
        .split('')
        .reduce((acc, digit) => acc + Number(digit), 0);

    console.log(`Sum of numbers ${num} equals: ${result}`);
}

countSum(number);