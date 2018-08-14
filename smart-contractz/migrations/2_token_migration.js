var JRRToken = artifacts.require("./JRRToken.sol");

module.exports = function(deployer) {
  deployer.deploy(JRRToken);
};
