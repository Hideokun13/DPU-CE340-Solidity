// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

abstract contract Auction {
  address payable public auctionOwner;
  uint public auctionStart; //เวลาใน smart contract จะเก็บวนรูปแบบของวินาที
  uint public auctionEnd;
  uint public highestBid;
  address public highestBidder;

  enum AuctionState { STARTED, CANCELLED, ENDED, DESTRUCTED }

  AuctionState public STATE;

  struct Product {
    string brand;
    string serialNumber;
  }

  // - Create auction
	// - Cancle auction
  function cancelAuction() virtual public returns (bool);

	// - End auction
  function endAuction() virtual public returns (bool);

	// - Bid
  function bid() virtual payable public returns (bool);

  // - GetStatus
  //function getStatus() virtual public returns(uint);

	// - GetProductInfo
  // string เราต้องบอก Location บน ram ให้มัน (บน memory)
  function getProductInfo() virtual public returns(string memory, string memory);

  function withdraw() virtual public returns(bool);

  // GetMyStatus
  function getMyBid(address bidder) virtual public returns(uint);
}