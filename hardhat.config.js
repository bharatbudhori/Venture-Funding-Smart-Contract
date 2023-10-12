/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        version: "0.8.17",
        defaultNetwork: "goerli",
        network: {
            hardhat: {},
            goerli: {
                url: "https://goerli.rpc.thirdweb.com",
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
