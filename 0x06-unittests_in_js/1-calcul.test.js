const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", function () {
  describe("SUM", function () {
    it("should return 4", function () {
      assert.strictEqual(calculateNumber("SUM", 1, 3), 4);
    });
    it("should return 5", function () {
      assert.strictEqual(calculateNumber("SUM", 1, 3.7), 5);
    });
    it("should return 5", function () {
      assert.strictEqual(calculateNumber("SUM", 1.2, 3.7), 5);
    });
    it("should return 6", function () {
      assert.strictEqual(calculateNumber("SUM", 1.5, 3.7), 6);
    });
    it("should return 5", function () {
      assert.strictEqual(calculateNumber("SUM", 1.4, 3.5), 5);
    });
    it("should return 5", function () {
      assert.strictEqual(calculateNumber("SUM", 1.4, 3.2), 4);
    });
  });

  describe("SUBTRACT", function () {
    it("should return -2", function () {
      assert.strictEqual(calculateNumber("SUBTRACT", 1, 3), -2);
    });
    it("should return -3", function () {
      assert.strictEqual(calculateNumber("SUBTRACT", 1, 3.7), -3);
    });
    it("should return -3", function () {
      assert.strictEqual(calculateNumber("SUBTRACT", 1.2, 3.7), -3);
    });
    it("should return -2", function () {
      assert.strictEqual(calculateNumber("SUBTRACT", 1.5, 3.7), -2);
    });
    it("should return -3", function () {
      assert.strictEqual(calculateNumber("SUBTRACT", 1.4, 3.5), -3);
    });
    it("should return -2", function () {
      assert.strictEqual(calculateNumber("SUBTRACT", 1.4, 3.2), -2);
    });
  });

  describe("DIVIDE", function () {
    it("should return 1/3", function () {
      assert.strictEqual(calculateNumber("DIVIDE", 1, 3), 1 / 3);
    });
    it("should return 1/4", function () {
      assert.strictEqual(calculateNumber("DIVIDE", 1, 3.7), 1 / 4);
    });
    it("should return 1/4", function () {
      assert.strictEqual(calculateNumber("DIVIDE", 1.2, 3.7), 1 / 4);
    });
    it("should return 2/4", function () {
      assert.strictEqual(calculateNumber("DIVIDE", 1.5, 3.7), 2 / 4);
    });
    it("should return 1/4", function () {
      assert.strictEqual(calculateNumber("DIVIDE", 1.4, 3.5), 1 / 4);
    });
    it("should return 1/3", function () {
      assert.strictEqual(calculateNumber("DIVIDE", 1.4, 3.2), 1 / 3);
    });
    it("should return 0", function () {
      assert.strictEqual(calculateNumber("DIVIDE", 0, 1.5), 0);
    });
    it("should return Error", function () {
      assert.strictEqual(calculateNumber("DIVIDE", 2.5, 0.4), "Error");
    });
  });
});
