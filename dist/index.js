"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBLock = new Block(0, '230023501249', '', 'Hello', 123456);
let blockchain = [genesisBLock];
console.log(blockchain);
//# sourceMappingURL=index.js.map