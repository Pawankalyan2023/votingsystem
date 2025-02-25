/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.11",
   defaultNetwork: "volta",
   networks: {
      hardhat: {},
      volta: {
         url: API_URL, // API URL
         accounts: [`0x${PRIVATE_KEY}`], // Ensure 64-character private key without "0x"
         gas: 2100000,
         gasPrice: 8000000000,
      }
   },
};