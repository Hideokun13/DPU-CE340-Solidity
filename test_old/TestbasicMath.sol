// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// These files are dynamically created at test time
import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/basicMath.sol";

contract TestbasicMath {

  function testAdd() public {
    basicMath ba = basicMath(DeployedAddresses.basicMath());

    int x = 7;
    int y = 5;
    int expected = x + y;

    Assert.equal(ba.add(x,y), expected, "The add function return incorrect result");
  }
  function testSubt() public {
    basicMath ba = basicMath(DeployedAddresses.basicMath());

    int x = 7;
    int y = 5;
    int expected = x - y;

    Assert.equal(ba.subt(x,y), expected, "The subt function return incorrect result");
  }
  function testMultiply() public {
    basicMath ba = basicMath(DeployedAddresses.basicMath());

    int x = 7;
    int y = 5;
    int expected = x * y;

    Assert.equal(ba.multiply(x,y), expected, "The multiply function return incorrect result");
  }
  function testDevide() public {
    basicMath ba = basicMath(DeployedAddresses.basicMath());

    int x = 7;
    int y = 5;
    int expected = x / y;

    Assert.equal(ba.divide(x,y), expected, "The devide function return incorrect result");
  }

}
