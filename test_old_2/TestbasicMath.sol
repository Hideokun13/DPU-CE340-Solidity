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

  function testSum() public {
    basicMath ba = basicMath(DeployedAddresses.basicMath());
    
    int[5] memory x = [int(1),int(2),int(3),int(4),int(5)];

    int sum = 0;
    for(uint i = 0; i < x.length; i++){
      sum = sum + x[i];
    }
    int expected = sum;

    Assert.equal(ba.sum(x), expected, "The devide function return incorrect result");
  }
  function testSum() public {
    basicMath ba = basicMath(DeployedAddresses.basicMath());
    
    int[5] memory x = [int(1),int(2),int(3),int(4),int(5)];

    int min = x[0];
    for(uint i = 0; i < x.length; i++){
      if(min > x[i]){
        min = x[i];
      }
    }
    int expected = min;

    Assert.equal(ba.min(x), expected, "The devide function return incorrect result");
  }
  function testMin() public {
    basicMath ba = basicMath(DeployedAddresses.basicMath());
    
    int[5] memory x = [int(1),int(2),int(3),int(4),int(5)];

    int max = x[0];
    for(uint i = 0; i < x.length; i++){
      if(max < x[i]){
        max = x[i];
      }
    }
    int expected = max;

    Assert.equal(ba.max(x), expected, "The devide function return incorrect result");
  }
  function testAvg() public {
    basicMath ba = basicMath(DeployedAddresses.basicMath());
    
    int[5] memory x = [int(1),int(2),int(3),int(4),int(5)];

    int sum = 0;
    for(uint i = 0; i < x.length; i++){
      sum = sum + x[i];
    }
    int expected = sum / x.length;

    Assert.equal(ba.avg(x), expected, "The devide function return incorrect result");
  }

}
