const { expect } = require("chai");
const request = require("request");

describe("express app integration tests", () => {
  describe("Index page", () => {
    const options = {
      url: "http://localhost:7865",
      method: "GET",
    };

    it("should return 200 status code", (done) => {
      request(options, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
      });
      done();
    });

    it("should return 'Welcome to the payment system as' as Body", (done) => {
      request(options, (err, res, body) => {
        expect(body).to.equal("Welcome to the payment system");
      });
      done();
    });
  });

  describe("cart page", () => {
    it(`should return 200 status code | id is a number and starts with 0,
    and 'Payment methods for cart :id' as the body`, (done) => {
      const options = {
        url: "http://localhost:7865/cart/01",
        method: "GET",
      };
      request(options, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal("Payment methods for cart 01");
      });
      done();
    });

    it(`should return 200 status code | id is a number,
    and 'Payment methods for cart :id' as the body`, (done) => {
      const options = {
        url: "http://localhost:7865/cart/123",
        method: "GET",
      };
      request(options, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal("Payment methods for cart 123");
      });
      done();
    });

    it("should return 404 statusCode | id is an all-alphabet string", (done) => {
      const options = {
        url: "http://localhost:7865/cart/hello",
        method: "GET",
      };
      request(options, (err, res, body) => {
        expect(res.statusCode).to.equal(404);
      });
      done();
    });

    it(`should return 404 statusCode,
    id starts with numbers, but not all-number`, (done) => {
      const options = {
        url: "http://localhost:7865/cart/123a",
        method: "GET",
      };
      request(options, (err, res, body) => {
        expect(res.statusCode).to.equal(404);
      });
      done();
    });

    it(`should return 404 statusCode,
    id starts with an alphabets, but not all-alphabet`, (done) => {
      const options = {
        url: "http://localhost:7865/cart/abc123",
        method: "GET",
      };
      request(options, (err, res, body) => {
        expect(res.statusCode).to.equal(404);
      });
      done();
    });

    it(`should return 404 statusCode,
    id is a mixture of alpabets and numbers`, (done) => {
      const options = {
        url: "http://localhost:7865/cart/a12c3b",
        method: "GET",
      };
      request(options, (err, res, body) => {
        expect(res.statusCode).to.equal(404);
      });
      done();
    });
  });
});
