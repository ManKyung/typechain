import * as CryptoJS from 'crypto-js';

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  static cacluateBlockHash = (
    index: number,
    previous: string,
    timestamp: number,
    data: string,
  ): string => CryptoJS.SHA256(index + previous + timestamp + data).toString();

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number,
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBLock: Block = new Block(0, '230023501249', '', 'Hello', 123456);

let blockchain: Block[] = [genesisBLock];

const getBlockchain = (): Block[] => blockchain;
const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimestamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  const previousBlock = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;
  const newTimestamp: number = getNewTimestamp();
  const newHash: string = Block.cacluateBlockHash(
    newIndex,
    previousBlock.hash,
    newTimestamp,
    data,
  );

  const newBlock: Block = new Block(
    newIndex,
    newHash,
    previousBlock.hash,
    data,
    newTimestamp,
  );

  return newBlock;
};

console.log(createNewBlock('Hello'), createNewBlock('Bye Bye'));

export {};
