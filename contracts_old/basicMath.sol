// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract basicMath {
  function add(int x, int y) public pure returns (int) {
    return x + y;
  }
  function subt(int x, int y) public pure returns (int) {
    return x - y;
  }
  function multiply(int x, int y) public pure returns (int) {
    return x * y;
  }
  function divide(int x, int y) public pure returns (int) {
    require(y != 0, 'divide by zero');
    return x / y;
  }

  //exercise 14/2/2023
  function sum(int [] memory data) public pure returns (int) {
    require(data.length > 0, 'Invalid data');
    int sum = 0;
    for(uint i = 0; i < data.length; i++){
      sum = sum + data[i];
    }
    return sum;
  }
  function min(int [] memory data) public pure returns (int) {
    require(data.length > 0, 'Invalid data');
    int min = data[0];
    for(uint i = 0; i < data.length; i++){
      if(min > data[i]){
        min = data[i];
      }
    }
    return min;
  }
  function max(int [] memory data) public pure returns (int) {
    require(data.length > 0, 'Invalid data');
    int max = data[0];
    for(uint i = 0; i < data.length; i++){
      if(max < data[i]){
        max = data[i];
      }
    }
    return max;
    
  }
  function avg(int [] memory data) public pure returns (int) {
    require(data.length > 0, 'Invalid data');
    int sum = 0;
    for(uint i = 0; i < data.length; i++){
      sum = sum + data[i];
    }
    return sum / int(data.length);
  }
}
