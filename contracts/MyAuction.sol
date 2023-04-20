// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./Auction.sol";

contract MyAuction is Auction {
    Product public myProduct;
    mapping (address => uint) bids; // mapping จะไม่บอกจำนวน rows ให้เรา
    address[] bidders; // เก็บ bidder ทั้งหมดเพื่อติดตามว่าเรามีกี่ rows ใน mapping

    // ชื่อ, id, ระยะเวลา
    constructor(string memory brand, string memory serial, uint period) {
      // create auction
      auctionOwner = payable(msg.sender); // address => address payable
      auctionStart = block.timestamp;
      auctionEnd = auctionStart + period * 1 hours;
      STATE = AuctionState.STARTED;
      myProduct = Product(brand, serial);
    }

    modifier onlyOwner {
      require(msg.sender == auctionOwner);
      _;
    }

    modifier onGoingAuction {
      require(STATE == AuctionState.STARTED);
      _;
    }

    event CancelEvent(uint timestamp);
    function cancelAuction() public override onlyOwner returns (bool) {
      STATE = AuctionState.CANCELLED;
      emit CancelEvent(block.timestamp);
      return true;
    }

    event EndEvent(address highestBidder, uint highestBid, uint timestamp);
    function endAuction() public override onlyOwner returns (bool) {
      STATE = AuctionState.ENDED;
      emit EndEvent(highestBidder, highestBid, block.timestamp);
      return true;
    }

    event BidEvent(address highestBidder, uint highestBid, uint timestamp);
    function bid() public payable override onGoingAuction returns (bool) {
      require(highestBidder != msg.sender, "Already a current highest bidder");
      require(msg.value > highestBid, "Only higher bid is allowed");
      highestBidder = msg.sender;
      highestBid = msg.value;
      bids[msg.sender] = msg.value;
      bidders.push(msg.sender);
      emit BidEvent(msg.sender, msg.value, block.timestamp);
      return true;
    }

    // function getStatus() public override returns (uint) {
    //   return STATE;
    // }

  function getProductInfo() public override view returns (string memory, string memory)
  {
    return (myProduct.brand, myProduct.serialNumber);
  }

  event WithdrawEvent(address bidder, uint amount, uint timestampe);
  function withdraw() public override returns (bool) {
    require(msg.sender != highestBidder, "The winner can not withdraw");
    require(STATE != AuctionState.STARTED, "Can not withdraw from ongoing auction");
    require(STATE != AuctionState.DESTRUCTED, "Can not withdraw from destroyed contract");

    uint amount = bids[msg.sender];
    delete bids[msg.sender];
    payable(msg.sender).transfer(amount);
    emit WithdrawEvent(msg.sender, amount, block.timestamp);
    return true;
  }

  function getMyBid(address bidder) public override view returns (uint) {
    return bids[bidder];
  }
}
