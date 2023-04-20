// const ConvertLib = artifacts.require("ConvertLib");
// const MetaCoin = artifacts.require("MetaCoin");
// const basicMath = artifacts.require("basicMath");
// const MyAuction = artifacts.require("MyAuction");
// const product = require('./product.json');

const Petshop = artifacts.require("Petshop");
const petPrices = require('./petprices.json');

module.exports = function(deployer) {
  // deployer.deploy(ConvertLib);
  // deployer.link(ConvertLib, MetaCoin);
  // deployer.deploy(MetaCoin);
  // deployer.deploy(basicMath);
  // deployer.deploy(MyAuction, product.brand, product.serial, product.period);
  deployer.deploy(Petshop, petPrices);
};
