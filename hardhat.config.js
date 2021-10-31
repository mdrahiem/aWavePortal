require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/9GE1CA6HOpfCfsyIv_o0dUDqem0_VjmE',
      accounts: ['782912a118cb077da37942c19903e263bd51e20b992992c0cc62d56d498c7872'],
    },
  },
};


// contract add 0x247e7E8A818634eE4421408AEe70bE4f475Bbe47
