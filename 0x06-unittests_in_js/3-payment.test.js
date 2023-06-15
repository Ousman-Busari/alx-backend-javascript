const Utils = require("./utils.js");
const sendPaymentRequestToApi = require("./3-payment.js");
const sinon = require("sinon");
const { expect } = require("chai");

describe("sendPaymentRequestToApi", function () {
  describe("sendPaymentRequestToApi", function () {
    it("should ensure the maths are the same", function () {
      const spyUtils = sinon.spy(Utils, "calculateNumber");
      const spyConsole = sinon.spy(console, "log");

      sendPaymentRequestToApi(100, 20);

      expect(spyUtils.calledOnceWithExactly("SUM", 100, 20)).to.be.true;
      expect(spyConsole.calledOnceWithExactly("The total is: 120")).to.be.true;
      spyUtils.restore();
      spyConsole.restore();
    });
  });
});
