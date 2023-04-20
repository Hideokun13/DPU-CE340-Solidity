const Petshop = artifacts.require("Petshop");
const { Target } = require("puppeteer");
const petPrices = require("../migrations/petPrices.json");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Petshop", function (accounts) {
  it("Petshop should assert true", async function () {
    await Petshop.deployed();
    return assert.isTrue(true);
  });

  it("should return the address of shop owner", async function () {
    const petShop = await Petshop.deployed();
    const owner = accounts[0]; //default account
    const shopOwner = await  petShop.shopOwner.call();
    return assert.equal(owner, shopOwner, "The shop owner must be the default account");
  });

  it("should return the number of pet for sale", async function () {
    const petShop = await Petshop.deployed();
    const totalPets = petPrices.length;
    const pTotalPets = (await petShop.getTotalPets.call()).toString();
    return assert.equal(totalPets, pTotalPets, "The total number of pet in incorrect");
  });

  it("should return all pet prices as array", async function () {
    const petShop = await Petshop.deployed();
    const prices = [];
    for (let i = 0; i < petPrices.length; i++) {
      prices[i] = web3.utils.fromWei(await petShop.getPrice(i));
    }
    console.log('price', prices);
    console.log('petPrice', petPrices);
    const expected = petPrices.every((val, index) => String(val) == prices[index]);
    return assert.isTrue(expected, "Some or all prices are incorrect");
  });
  const targetPetId = 6;
  const shopOwner = accounts[0];
  it("should buy a pet", async function () {
    const petShop = await Petshop.deployed();
    const prevBal = await petShop.getBalance({from: shopOwner});
    const buyer = accounts[1];
    const petPrice = await petShop.getPrice(targetPetId);
    let currentBal;
    try {
      await petShop.buy(targetPetId, {from: buyer, value: petPrice});
    } catch (err) {
      console.log(err);
    }
    currentBal = await petShop.getBalance({from: shopOwner});
    const diff = currentBal.sub(prevBal);
    assert.equal(diff.toString(), petPrice.toString(), "The balance is incorrect");

    const expectedBuyer = await petShop.getBuyer(targetPetId);
    return assert.equal(expectedBuyer, buyer, "Buyer info is incorrect");
  });
  it("should allow shopOwner to withdraw", async function () {
    const petShop = await Petshop.deployed();
    const prevBal = await petShop.getBalance({from: shopOwner});
    try {
      await petShop.withdraw(prevBal, {from: shopOwner});
    } catch (err) {
      console.log(err);
    }
    const currentBal = await petShop.getBalance({from: shopOwner});
    return assert.isTrue(prevBal.gt(currentBal) && currentBal.eq(new web3.utils.BN(0)), "The contract balance is incorrect");
  });
});
