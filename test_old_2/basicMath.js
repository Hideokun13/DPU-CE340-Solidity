const basicMath = artifacts.require("basicMath");
const puppeteer = require('puppeteer');
let browser, page;
const SKIP = true;

const delay = async milisec => new Promise(r => setTimeout(r, milisec));

contract('basicMath', (accounts) => {
  before(async () => {
    const mode = SKIP;
    browser = await puppeteer.launch({
      // headless: false,
      headless: mode,
      defaultViewport: null,
      args: ['--window-size=1200,800']
    });

    page = await browser.newPage();
    // await page.goto('http://www.dpu.ac.th');
    await page.goto('http://localhost:3000/02basic.html');

  });
  after(async () => {
    await page.close();
    await browser.close();
  });
  beforeEach(async () => {
    //Clear text inside of <p> with id "result"
    const result = await page.waitForSelector('#result');
    await result.evaluate(el => el.textContent = '');
  });
  // it('test puppeteer', async () => {
  //   await delay(3000);
  // });

  it('test add function', async () => {
    const x = 15, y = 33;
    const expected = x + y;
    await inputData(x, y, '#addBtn');
    const result = await page.waitForSelector('#result');
    const value = await result.evaluate(el => el.textContent);
    assert.equal(expected, value, 'The add function is incorrect');
    await delay(250);
  });
  it('test subt function', async () => {
    const x = 33, y = 15;
    const expected = x - y;
    if(x > y)
      await inputData(x, y, '#subtBtn');
    else
      await inputData(y, x, 'subtBtn');
    const result = await page.waitForSelector('#result');
    const value = await result.evaluate(el => el.textContent);
    assert.equal(expected, value, 'The subt function is incorrect');
    await delay(250);
  });
  it('test multiply function', async () => {
    const x = 15, y = 33;
    const expected = x * y;
    await inputData(x, y, '#multiplyBtn');
    const result = await page.waitForSelector('#result');
    const value = await result.evaluate(el => el.textContent);
    assert.equal(expected, value, 'The multiply function is incorrect');
    await delay(250);
  });
  it('test divide function', async () => {
    const x = 108, y = 9;
    const expected = x / y;
    if(x > y)
      await inputData(x, y, '#divideBtn');
    else
      await inputData(y, x, '#divideBtn');
    const result = await page.waitForSelector('#result');
    const value = await result.evaluate(el => el.textContent);
    assert.equal(expected, Math.floor(value), 'The divide function is incorrect');
    await delay(250);
  });
  it('test sum function', async () => {
    const x = "1,2,3,4,5";
    const x_arr = x.split(',').map(Number);
    let sum = 0;
    for(let i = 0; i < x_arr.length; i++){
      sum += x_arr[i];
      // console.log("x_arr[i]: "+ x_arr[i] + " sum = " + sum);
    }
    const expected = sum;
    // console.log("expected value:" + expected);
    await inputData2(x, '#sumBtn');
    const result = await page.waitForSelector('#result2');
    const value = await result.evaluate(el => el.textContent);
    assert.equal(expected, value, 'The sum function is incorrect');
    await delay(250);
  });
  it('test min function', async () => {
    const x = "1,2,3,4,5"
    const x_arr = x.split(',').map(Number);
    let min = x_arr[0];
    for(let i = 0; i < x_arr.length; i++){
      if(min > x_arr[i])
        min = x_arr[i];
    }
    const expected = min;
    await inputData2(x, '#minBtn');
    const result = await page.waitForSelector('#result2');
    const value = await result.evaluate(el => el.textContent);
    assert.equal(expected, value, 'The min function is incorrect');
    await delay(250);
  });
  it('test max function', async () => {
    const x = "1,2,3,4,5"
    const x_arr = x.split(',').map(Number);
    let max = x_arr[0];
    for(let i = 0; i < x_arr.length; i++){
      if(max < x_arr[i])
        max = x_arr[i];
    }
    const expected = max;
    await inputData2(x, '#maxBtn');
    const result = await page.waitForSelector('#result2');
    const value = await result.evaluate(el => el.textContent);
    assert.equal(expected, value, 'The max function is incorrect');
    await delay(250);
  });
  it('test avg function', async () => {
    const x = "1,2,3,4,5"
    const x_arr = x.split(',').map(Number);
    let sum = 0;
    for(let i = 0; i < x_arr.length; i++){
      sum += x_arr[i];
      // console.log("x_arr[i]: "+ x_arr[i] + " sum = " + sum);
    }
    const expected = sum / x_arr.length;
    // console.log("expected value:" + expected);
    await inputData2(x, '#avgBtn');
    const result = await page.waitForSelector('#result2');
    const value = await result.evaluate(el => el.textContent);
    assert.equal(expected, Math.floor(value), 'The avg function is incorrect');
    await delay(250);
  });

});

const inputData = async(x, y, btnId) => {
  const param1 = await page.waitForSelector('#param1');
  const kbDelay = SKIP ? {} : {delay: 100}
  await param1.focus();
  await page.keyboard.type(String(x), kbDelay);
  if(!SKIP)
    await delay(250);

  const param2 = await page.waitForSelector('#param2');
  await param2.focus();
  await page.keyboard.type(String(y), kbDelay);
  if(!SKIP)
    await delay(250);

  const submit = await page.waitForSelector(btnId);
  await submit.click();
  await delay(250);
}

const inputData2 = async(x, btnId) => {
  const param = await page.waitForSelector('#param3');
  const kbDelay = SKIP ? {} : {delay: 100}
  await param.focus();
  await page.keyboard.type(String(x), kbDelay);
  if(!SKIP)
    await delay(250);

  const submit = await page.waitForSelector(btnId);
  await submit.click();
  await delay(250);
}