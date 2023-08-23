const Utils = require("./utils.js");
const sendPaymentRequestToApi = require("./4-payment.js");
const sinon = require("sinon");
const { expect } = require("chai");

describe("sendPaymentRequestToApi", function () {
  describe("sendPaymentRequestToApi", function () {
    it("should ensure the maths are the same", function () {
      const spyUtils = sinon.stub(Utils, "calculateNumber").returns(10);
      const spyConsole = sinon.spy(console, "log");

      sendPaymentRequestToApi(100, 20);

      expect(spyUtils.calledOnceWithExactly("SUM", 100, 20)).to.be.true;
      expect(spyConsole.calledOnceWithExactly("The total is: 10")).to.be.true;
      spyUtils.restore();
      spyConsole.restore();
    });
  });
});
