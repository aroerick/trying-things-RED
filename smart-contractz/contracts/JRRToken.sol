pragma solidity ^0.4.23;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract JRRToken is StandardToken {

    string public name = "JRRToken";
    string public symbol = "JRR";
    uint8 public decimals = 2;
    uint public INITIAL_SUPPLY = 1234567;

    constructor() public {
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }

}