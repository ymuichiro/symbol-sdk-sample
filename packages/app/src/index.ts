import symbolSdk from "symbol-sdk";

const facade = new symbolSdk.facade.SymbolFacade("testnet");
const transaction = facade.transactionFactory.create({
  type: "transfer_transaction_v1",
  signerPublicKey:
    "87DA603E7BE5656C45692D5FC7F6D0EF8F24BB7A5C10ED5FDA8C5CFBC49FCBC8",
  fee: 1000000n,
  deadline: 41998024783n,
  recipientAddress: "TCHBDENCLKEBILBPWP3JPB2XNY64OE7PYHHE32I",
  mosaics: [{ mosaicId: 0x7cdf3b117a3c40ccn, amount: 1000000n }],
});

console.log(transaction);
