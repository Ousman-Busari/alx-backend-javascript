const { expect } = require("chai");
const request = require("request");

describe("express app integration tests", () => {
  describe("Index page", () => {
    it("should return 200 status code", (done) => {
      const options = {
        url: "http://localhost:7865",
        method: "GET",
      };
      request(options, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
      });
      done();
    });
    
    it("should return 'Welcome to the payment system as' as Body", (done) => {
      const options = {
        url: "http://localhost:7865",
        method: "GET",
      };
      request(options, (err, res, body) => {
        expect(body).to.equal("Welcome to the payment system");
      });
      done();
    });

    it("should return 200 status code", (done) => {
      const options = {
        url: "http://localhost:7865/not_found",
        method: "GET",
      };
      request(options, (err, res, body) => {
        expect(res.statusCode).to.equal(404);
      });
      done();
    });
  });
});
