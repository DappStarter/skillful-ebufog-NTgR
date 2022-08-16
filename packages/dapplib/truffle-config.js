require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remain proof install cricket supply genre'; 
let testAccounts = [
"0xdbcfa385bf2aecf1e2fe0c5434221932345c284cb745c282111a6cf9453f2ac2",
"0xe1b7d375298876477cfb398d84e35023be9a09f577efe8597f7b2bba3626adba",
"0xc0b1290300e04bf28c4c75391133ffd8c4a9c332ab3902435cf9fc93afa6aee5",
"0xdc85e3b2e5de135aab87c5a6ce47c99826ed1987043368dfcbd81b19d1e189fd",
"0xedc4c64d4078c73b6a6870df9c02a5efe0a8af94c13e75a00d6a1d4a24d2e46f",
"0x861051d42a3a6721415ea83ec29e20177252e536a80b2915885ec4a62d2781c2",
"0xa2b3a4fbca0fd14de393cb6420fcc6dcdf789872c6c420f5bab4231ffc5ee5c9",
"0x44d40bb21c4432a8061ce505da7d482b1e68d3d66348a42c769b2a497024178b",
"0xe06528a1f7dd3d44686399a4cf9bc65a8a0286cba40c918b0f5456e6a92081be",
"0x198eae1a858a4012903db9cda1f46c10b36dd29d4cb7caf38623bce9de48a0aa"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

