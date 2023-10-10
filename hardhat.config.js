/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        version: "0.8.17",
        defaultNetwork: "goerli",
        network: {
            hardhat: {},
            goerli: {
                url: "https://rpc.ankr.com/eth/goerli",
                accounts: [process.env.PRIVATE_KEY],
            },
        },
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
};
