const { add } = require('./calculator');

describe('String Calculator', () => {
    test('should return 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });

    test('should return the number itself for a single number', () => {
        expect(add("1")).toBe(1);
        expect(add("5")).toBe(5);
    });

    test('should return the sum for two numbers', () => {
        expect(add("1,2")).toBe(3);
        expect(add("5,10")).toBe(15);
    });

    test('should return the sum for multiple numbers', () => {
        expect(add("1,2,3,4")).toBe(10);
    });

    test('should handle newlines as delimiters', () => {
        expect(add("1\n2,3")).toBe(6);
    });

    test('should throw an error for negative numbers', () => {
        expect(() => add("1,-2,3")).toThrow("Negatives not allowed: -2");
    });

    test('should support custom delimiters', () => {
        expect(add("//;\n1;2")).toBe(3);
        expect(add("//|\n2|3|4")).toBe(9);
    });

    test('should ignore numbers greater than 1000', () => {
        expect(add("2,1001")).toBe(2);
        expect(add("1000,2000")).toBe(1000);
    });
});
