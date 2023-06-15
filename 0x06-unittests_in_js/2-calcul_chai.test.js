const calculateNumber = require("./2-calcul");
const chai = require("chai");
const expect = chai.expect;

describe("calculateNumber", function () {
  describe("SUM", function () {
    it("should return 4", function () {
      expect(calculateNumber("SUM", 1, 3)).to.equal(4);
    });
    it("should return 5", function () {
      expect(calculateNumber("SUM", 1, 3.7)).to.equal(5);
    });
    it("should return 5", function () {
      expect(calculateNumber("SUM", 1.2, 3.7)).to.equal(5);
    });
    it("should return 6", function () {
      expect(calculateNumber("SUM", 1.5, 3.7)).to.equal(6);
    });
    it("should return 5", function () {
      expect(calculateNumber("SUM", 1.4, 3.5)).to.equal(5);
    });
    it("should return 5", function () {
      expect(calculateNumber("SUM", 1.4, 3.2)).to.equal(4);
    });
  });

  describe("SUBTRACT", function () {
    it("should return -2", function () {
      expect(calculateNumber("SUBTRACT", 1, 3)).to.equal(-2);
    });
    it("should return -3", function () {
      expect(calculateNumber("SUBTRACT", 1, 3.7)).to.equal(-3);
    });
    it("should return -3", function () {
      expect(calculateNumber("SUBTRACT", 1.2, 3.7)).to.equal(-3);
    });
    it("should return -2", function () {
      expect(calculateNumber("SUBTRACT", 1.5, 3.7)).to.equal(-2);
    });
    it("should return -3", function () {
      expect(calculateNumber("SUBTRACT", 1.4, 3.5)).to.equal(-3);
    });
    it("should return -2", function () {
      expect(calculateNumber("SUBTRACT", 1.4, 3.2)).to.equal(-2);
    });
  });

  describe("DIVIDE", function () {
    it("should return 1/3", function () {
      expect(calculateNumber("DIVIDE", 1, 3)).to.equal(1 / 3);
    });
    it("should return 1/4", function () {
      expect(calculateNumber("DIVIDE", 1, 3.7)).to.equal(1 / 4);
    });
    it("should return 1/4", function () {
      expect(calculateNumber("DIVIDE", 1.2, 3.7)).to.equal(1 / 4);
    });
    it("should return 2/4", function () {
      expect(calculateNumber("DIVIDE", 1.5, 3.7)).to.equal(2 / 4);
    });
    it("should return 1/4", function () {
      expect(calculateNumber("DIVIDE", 1.4, 3.5)).to.equal(1 / 4);
    });
    it("should return 1/3", function () {
      expect(calculateNumber("DIVIDE", 1.4, 3.2)).to.equal(1 / 3);
    });
    it("should return 0", function () {
      expect(calculateNumber("DIVIDE", 0, 1.5)).to.equal(0);
    });
    it("should return Error", function () {
      expect(calculateNumber("DIVIDE", 1.4, 0)).to.equal("Error");
    });
  });
});
