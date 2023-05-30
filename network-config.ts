import {StacksMocknet, StacksTestnet, StacksMainnet} from "@stacks/network";


// StacksMocknet: Using for local dev (localhost:3999)
// StacksTestnet: Using for testnet
// StacksMainnet: Using for mainnet


// for mainnet, 'https://stacks-node-api.mainnet.stacks.co'
// testnet 'https://stacks-node-api.testnet.stacks.co'
// local :  http://localhost:3999

// This data for testnet
let stackNetwork = StacksTestnet
let urlStackApi = "https://stacks-node-api.testnet.stacks.co"
let isMainnetInfo = false

let addressContract = ''
let nameContract = ''

console.log('network-config')

if (typeof window !== 'undefined') {
    if (localStorage.getItem('NETWORK_CONTRACT') == 'mainnet') {
        stackNetwork = StacksMainnet
        urlStackApi = "https://stacks-node-api.mainnet.stacks.co"
        isMainnetInfo = true
        addressContract = ''
        nameContract = ''
    }
}

export const currentNetwork = stackNetwork

export const contractOwnerAddress = addressContract //

export const contractName = nameContract //

export const fullContractOwnerAddressName = contractOwnerAddress + '.' + contractName

export const isMainnet = isMainnetInfo

export const urlStackNodeApi = urlStackApi

export const urlStackNodeApiV1Contract = urlStackNodeApi + "/extended/v1/address/" + fullContractOwnerAddressName

export const urlStackNodeApiV1Adress = urlStackNodeApi + "/extended/v1/address"

export const urlStackNodeApiV1Tx = urlStackNodeApi + "/extended/v1/tx"
