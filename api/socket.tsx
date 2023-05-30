import { io } from "socket.io-client";
import * as stacks from '@stacks/blockchain-api-client';
import { contractOwnerAddress } from "../network-config";

// for testnet, replace with https://stacks-node-api.testnet.stacks.co/
// for mainnet, replace with https://stacks-node-api.mainnet.stacks.co/

let url = "https://stacks-node-api.testnet.stacks.co/"

if(typeof window !== 'undefined') {
  if(localStorage.getItem('NETWORK_CONTRACT') == 'mainnet'){
    url = "https://stacks-node-api.mainnet.stacks.co/"
  }
}

const socketUrl = url;

const socket = io(socketUrl, {
  transports: [ "websocket" ]
});
const sc = new stacks.StacksApiSocketClient(socket);

console.log('sc',sc)

export const subscribeAddressTrans = (address:string) => {
    console.log('scAddress',address)
    sc.subscribeMempool();
    logEventNewProduct()
    sc.logEvents()
}

export const logEventNewProduct = () => {
  socket.on('mempool aaaa', tx => console.log('mempool', tx));
  // socket.on('block', (block:any) => {
  //   console.log('block override', block)
  // })
}
