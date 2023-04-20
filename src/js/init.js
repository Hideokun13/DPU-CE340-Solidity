const WEB3_URL = 'http://127.0.0.1:9545/'
// const WEB3_URL_WS = 'ws://127.0.0.1:9545'
//Web 3 RPC 2 type -> HTTP RPC / Web Socket RPC

//Global Variable
let web3;

const initWeb3 = async () => {
    let provider;
    // (1) create Web3 Provider
    if(WEB3_URL.startsWith('http'))
        //create Web3 object for HTTP RPC
        provider = new Web3.providers.HttpProvider(WEB3_URL);
    else
        //create Web3 object for Websocket RPC
        provider = new Web3.providers.WebsocketProvider(WEB3_URL);
    //(2) create Web3 Object
    web3 = new Web3(provider);
    console.log(web3);
};