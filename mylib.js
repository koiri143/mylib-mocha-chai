/**
 * mylib - a small library of basic arithmetic operations.
 *
 * @module mylib
 */

/**
 * Adds two numbers.
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} The sum of a and b.
 */
export function add(a, b) {
  return a + b;
}

/**
 * Subtracts the second number from the first one.
 * @param {number} a - Number to subtract from.
 * @param {number} b - Number to subtract.
 * @returns {number} The difference a - b.
 */
export function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} The product of a and b.
 */
export function multiply(a, b) {
  return a * b;
}

/**
 * Divides the first number by the second one.
 * @param {number} a - Dividend.
 * @param {number} b - Divisor. Must not be 0.
 * @returns {number} The quotient a / b.
 * @throws {Error} If the divisor is 0 (ZeroDivision).
 */
export function divide(a, b) {
  if (b === 0) {
    throw new Error("ZeroDivision: cannot divide by zero");
  }
  return a / b;
}
