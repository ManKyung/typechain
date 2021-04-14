"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.cacluateBlockHash = (index, previous, timestamp, data) => CryptoJS.SHA256(index + previous + timestamp + data).toString();
const genesisBLock = new Block(0, '230023501249', '', 'Hello', 123456);
let blockchain = [genesisBLock];
const getBlockchain = () => blockchain;
const getLatestBlock = () => blockchain[blockchain.length - 1];
const getNewTimestamp = () => Math.round(new Date().getTime() / 1000);
//# sourceMappingURL=index.js.map