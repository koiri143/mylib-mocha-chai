/**
 * Main program: imports mylib and runs each of its functions once.
 * Start it with: npm start
 */
import { add, subtract, multiply, divide } from "./mylib.js";

console.log("add(2, 3)      =", add(2, 3));
console.log("subtract(10, 4) =", subtract(10, 4));
console.log("multiply(6, 7)  =", multiply(6, 7));
console.log("divide(20, 5)   =", divide(20, 5));

// Division by zero throws an error, so it is handled with try/catch here.
try {
  divide(1, 0);
} catch (error) {
  console.log("divide(1, 0)    -> error:", error.message);
}
