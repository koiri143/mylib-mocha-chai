/**
 * Unit tests for mylib using Mocha (test runner) and Chai (expect style).
 * Run only the tests with: npm test
 */
import { expect } from "chai";
import { add, subtract, multiply, divide } from "../mylib.js";

describe("mylib", function () {
  // Runs once before the first test.
  before(function () {
    console.log("    [before] Starting the mylib test suite");
  });

  // Runs once after the last test.
  after(function () {
    console.log("    [after] Finished the mylib test suite");
  });

  describe("add()", function () {
    it("adds two positive numbers", function () {
      expect(add(2, 3)).to.equal(5);
    });

    it("adds negative numbers", function () {
      expect(add(-2, -3)).to.equal(-5);
    });

    it("handles decimals with a small tolerance", function () {
      expect(add(0.1, 0.2)).to.be.closeTo(0.3, 0.0001);
    });
  });

  describe("subtract()", function () {
    it("subtracts two numbers", function () {
      expect(subtract(10, 4)).to.equal(6);
    });

    it("can return a negative result", function () {
      expect(subtract(4, 10)).to.equal(-6);
    });
  });

  describe("multiply()", function () {
    it("multiplies two numbers", function () {
      expect(multiply(6, 7)).to.equal(42);
    });

    it("returns 0 when multiplying by 0", function () {
      expect(multiply(5, 0)).to.equal(0);
    });
  });

  describe("divide()", function () {
    it("divides two numbers", function () {
      expect(divide(20, 5)).to.equal(4);
    });

    it("returns a decimal result when needed", function () {
      expect(divide(1, 4)).to.equal(0.25);
    });

    it("throws an error when the divisor is 0", function () {
      expect(() => divide(10, 0)).to.throw(Error, "ZeroDivision");
    });
  });
});
