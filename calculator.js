function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    let delimiters = [',', '\n'];
    if (numbers.startsWith("//")) {
        const parts = numbers.split('\n');
        delimiters.push(parts[0].slice(2)); // Custom delimiter
        numbers = parts[1];
    }

    delimiters.forEach(delimiter => {
        numbers = numbers.split(delimiter).join(',');
    });

    const numList = numbers.split(',').map(Number);
    let total = 0;
    const negatives = [];

    numList.forEach(num => {
        if (num < 0) {
            negatives.push(num);
        }
        if (num <= 1000) {
            total += num;
        }
    });

    if (negatives.length > 0) {
        throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
    }

    return total;
}

module.exports = { add };
