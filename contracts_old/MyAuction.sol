// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./Auction.sol";

contract MyAuction is Auction {
  Product public myProduct;
  mapping (address => uint) bids;
  address [] bidders;

    constructor(string memory brand, string memory serial, uint period) {
      auctionOwner = payable(msg.sender); //address => address payable
      auctionStart = block.timestamp;
      auctionEnd = auctionStart + period * 1 hours;
      STATE = AuctionState.STARTED;

      myProduct = Product(brand, serial);

    }

    modifier onlyOnwer {
      require(msg.sender == auctionOwner);
      _;
    }

    modifier onGoingAuction {
      require(STATE == AuctionState.STARTED);
      _;
    }

    function cancelAuction() public virtual override onlyOnwer returns (bool) {}

    function endAuction() public virtual override onlyOnwer returns (bool) {}

    function bid() public virtual override onGoingAuction returns (bool) {}

    function getStatus() public virtual override returns (uint) {}

    function getProductInfo()
        public
        virtual
        override
        returns (string memory, string memory)
    {}

    function withdraw() public virtual override returns (bool) {}

    function getMyBid() public virtual override returns (uint) {}
}
