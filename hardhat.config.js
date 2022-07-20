const fs = require('fs');
require('@nomiclabs/hardhat-waffle');

const privateKey = fs.readFileSync('.secret').toString().trim();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1,
    },
    mumbai: {
      url: 'https://api.infura.io/v1/jsonrpc/mainnet',
      accounts: [`0x${privateKey}`],
    },
  },
  solidity: '0.8.4',
};
