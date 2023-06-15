const Utils = require("./utils.js");
const sendPaymentRequestToApi = require("./5-payment.js");
const sinon = require("sinon");
const { expect } = require("chai");

describe("sendPaymentRequestToApi Hooks", function () {
  let spyConsole;
  beforeEach(function () {
    spyConsole = sinon.spy(console, "log");
  });

  afterEach(function () {
    spyConsole.restore();
  });

  it("logs correctly with 100, 20", function () {
    sendPaymentRequestToApi(100, 20);
    expect(spyConsole.calledOnceWithExactly("The total is: 120")).to.be.true;
  });

  it("logs correctly with 10, 10", function () {
    sendPaymentRequestToApi(10, 10);
    expect(spyConsole.calledOnceWithExactly("The total is: 20")).to.be.true;
  });
});
