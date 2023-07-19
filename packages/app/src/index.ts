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

type PrivateKey = InstanceType<typeof symbolSdk.PrivateKey>;
const privateKey: PrivateKey = new symbolSdk.PrivateKey(
  "EDB671EB741BD676969D8A035271D1EE5E75DF33278083D877F23615EB839FEC"
);

type Signature = InstanceType<typeof symbolSdk.Signature>;
const signature: Signature = facade.signTransaction(
  new symbolSdk.symbol.KeyPair(privateKey),
  transaction
);

console.log(privateKey.toString());
console.log(signature.toString());

const jsonPayload: string = symbolSdk.symbol.TransactionFactory.attachSignature(
  transaction,
  signature
);

console.log(jsonPayload);
