import { capitalize, reverse } from "./script.js";
import { calculator } from "./script.js";
import { caesarCipher } from "./script.js";
import { analyzeArray } from "./script.js";
// Cap
test("returns it with the first character capitalized", () => {
  expect(capitalize("hello")).toBe("Hello");
});
// Rever
test("takes a string and returns it reversed.", () => {
  expect(reverse("olleh")).toBe("hello");
});
//Calc
test("should take two numbers and return the correct calculation for add", () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test("should take two numbers and return the correct calculation for subtract", () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test("should take two numbers and return the correct calculation for multiply", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test("should take two numbers and return the correct calculation for divide", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});
//Caesar
// h → k (move 3 from 'h' to 'k')
test("should shift letters by the given factor", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("abc", 3)).toBe("def");
  expect(caesarCipher("HELLO", 3)).toBe("KHOOR");
  expect(caesarCipher("hello", 3)).toBe("khoor");
});

test("shifted lettercase should follow the original lettercase", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("should shift letters by the given factor", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  expect(caesarCipher("Good Morning!", 5)).toBe("Ltti Rtwsnsl!");
});
//analyzeArray
test("takes an array of numbers and returns an object", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
