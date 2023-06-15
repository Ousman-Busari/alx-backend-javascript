const getPaymentTokenFromAPI = require("./6-payment_token.js");
const { expect } = require("chai");

describe("getPaymentTokenFromAPI", function () {
  it("async test", function (done) {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.include({
          data: "Successful response from the API",
        });
        done();
      })
      .catch((error) => done(error));
  });
});
