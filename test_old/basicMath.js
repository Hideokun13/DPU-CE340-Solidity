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
});
