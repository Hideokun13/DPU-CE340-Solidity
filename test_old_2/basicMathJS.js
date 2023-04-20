const basicMath = artifacts.require("basicMath");

contract('basicMath', (accounts) => {
  it('should return the addition result correcly', async () => {
    const ba = await basicMath.deployed();
    const x = 5;
    const y = 7;
    const expected = x + y;
    const result = await ba.add.call(x, y);
    assert.equal(result, expected, "the add function retuen incorrect result");
  });
  it('should return the subtract result correcly', async () => {
    const ba = await basicMath.deployed();
    const x = 5;
    const y = 7;
    const expected = x - y;
    const result = await ba.subt.call(x, y);
    assert.equal(result, expected, "the subtract function retuen incorrect result");
  });
  it('should return the multiply result correcly', async () => {
    const ba = await basicMath.deployed();
    const x = 5;
    const y = 7;
    const expected = x * y;
    const result = await ba.multiply.call(x, y);
    assert.equal(result, expected, "the multiply function retuen incorrect result");
  });
  it('should return the dividion result correcly', async () => {
    const ba = await basicMath.deployed();
    const x = 5;
    const y = 7;
    const expected = Math.floor(x / y);
    const result = await ba.divide.call(x, y);
    assert.equal(result, expected, "the dividion function retuen incorrect result");
  });
  it('should return the sum result correcly', async () => {
    const x = "1,2,3,4,5";
    const x_arr = x.split(',').map(Number);
    let sum = 0;
    for(let i = 0; i < x_arr.length; i++){
      sum += x_arr[i];
    }
    const expected = sum;
    const result = await ba.sum.call(x);
    assert.equal(result, expected, "the sum function retuen incorrect result");
  });
  it('should return the min result correcly', async () => {
    const x = "1,2,3,4,5"
    const x_arr = x.split(',').map(Number);
    let min = x_arr[0];
    for(let i = 0; i < x_arr.length; i++){
      if(min > x_arr[i])
        min = x_arr[i];
    }
    const expected = min;
    const result = await ba.min.call(x, y);
    assert.equal(result, expected, "the min function retuen incorrect result");
  });
  it('should return the max result correcly', async () => {
    const x = "1,2,3,4,5"
    const x_arr = x.split(',').map(Number);
    let max = x_arr[0];
    for(let i = 0; i < x_arr.length; i++){
      if(max < x_arr[i])
        max = x_arr[i];
    }
    const expected = max;
    const result = await ba.max.call(x, y);
    assert.equal(result, expected, "the max function retuen incorrect result");
  });
  it('should return the avg result correcly', async () => {
    const x = "1,2,3,4,5"
    const x_arr = x.split(',').map(Number);
    let sum = 0;
    for(let i = 0; i < x_arr.length; i++){
      sum += x_arr[i];
    }
    const expected = sum / x_arr.length;
    const result = await ba.divide.call(x);
    assert.equal(result, expected, "the avg function retuen incorrect result");
  });
});
