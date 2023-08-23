const Utils = require("./utils.js");

function sendPaymentResquestToAPI(totalAmount, totalShipping) {
  let total = Utils.calculateNumber("SUM", totalAmount, totalShipping);
  console.log(`The total is: ${total}`);
}

module.exports = sendPaymentResquestToAPI;
