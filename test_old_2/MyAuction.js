const MyAuction = artifacts.require("MyAuction");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("MyAuction", function (/* accounts */) {
  it("should assert true", async function () {
    await MyAuction.deployed();
    return assert.isTrue(true);
  });

  //should return the correct auction owner (address)

  //should return the imformation of product / merchandise

  //should make some bid

  //should return the hightest bidder

  //should return the hightest bit

  //should not allow a bid with the same amount again

  //should not allow withdraw during the ongoing auction

  //should close the auction properly

  //should allow any withdrawal after the auction has ended
});
