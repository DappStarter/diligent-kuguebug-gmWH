require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remember huge guess private flat twin'; 
let testAccounts = [
"0xbb39e30778ecbd1c3816d973f98aea5902ef8ba91d6e51c131de438c151ce7de",
"0xd5017580ede854425dbfa48fa4ec6613853a2d3db8ee268672d58753a5be66b4",
"0x340777c451be0f011500fef2e17a3bc0f3fb4ea63b28961f231af84c7176fa85",
"0x688d9f7f3a47fc9ab2c226393300da4732a49ea82444024e6e9a7754db239bdb",
"0xe1fb77fa8007a0233dfa4466a2754bcec1502db0e7623d2c93e96d548d2cf1fb",
"0x55fffddfe9716f635858fbb21df3abd3e104d340ed1fe59be375617cc74cbf7c",
"0xddcd13ccce37131a2b3c1006cba707c8414eff5abbcc37cefc590a885b59768b",
"0xeeea08b357f0ed0d9d268a9cb2dd83f08ca885bedf09fd7c5fb9ef0457d050c1",
"0x6dd68d18b199d584457e2937f36cc4e1814365cf00c76677c246273c5342f288",
"0xc755664df1f326a3811182fefb7b92564befba4e258b61a6d54b7d90b0c074c7"
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

