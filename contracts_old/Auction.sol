// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

abstract contract Auction {
  // - createAuction
  address payable public auctionOwner;
  uint public auctionStart;
  uint public auctionEnd;
  uint public highestBid;
  address public highestBidder;

  enum AuctionState { STARTED, CANCELLED, ENDED, DESTRUCTED }

  struct Product {
    string brand;
    string serialNumber;
  }

  AuctionState public STATE;

    // - cancelAcution
      function cancelAuction() virtual public returns (bool);
    // - endAcuction
      function endAuction() virtual public returns (bool);
    // - bid
      function bid() virtual public returns (bool);
    // - getStatus
      function getStatus() virtual public returns (uint);
    // - getProductInfo
      function getProductInfo() virtual public returns (string memory, string memory);

      function withdraw() virtual public returns (bool);

      function getMyBid() virtual public returns (uint);
}
