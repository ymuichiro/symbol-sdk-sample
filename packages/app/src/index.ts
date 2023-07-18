import { Configuration, TransactionRoutesApi } from "symbol-rest";
import * as symbolSdk from "symbol-sdk";
import type { PrivateKey, Signature } from "symbol-sdk/src/CryptoTypes.js";

const config = new Configuration();
const transactionHttpRepo = new TransactionRoutesApi(config);

const facade = new symbolSdk.SymbolFacade("testnet");

const transaction = facade.transactionFactory.create({
  type: "transfer_transaction_v1",
  signerPublicKey:
    "87DA603E7BE5656C45692D5FC7F6D0EF8F24BB7A5C10ED5FDA8C5CFBC49FCBC8",
  fee: 1000000n,
  deadline: 41998024783n,
  recipientAddress: "TCHBDENCLKEBILBPWP3JPB2XNY64OE7PYHHE32I",
  mosaics: [{ mosaicId: 0x7cdf3b117a3c40ccn, amount: 1000000n }],
});

const privateKey: PrivateKey = new symbolSdk.CryptoTypes.PrivateKey(
  "EDB671EB741BD676969D8A035271D1EE5E75DF33278083D877F23615EB839FEC"
);

const signature: Signature = facade.signTransaction(
  new symbolSdk.SymbolKeyPair.KeyPair(privateKey),
  transaction
);

// type error
// const jsonPayload = facade.transactionFactory.constructor.attachSignature(
//   transaction,
//   signature
// );

// type ok
const jsonPayload: string =
  symbolSdk.SymbolTransactionFactory.default.attachSignature(
    transaction,
    signature
  );

transactionHttpRepo
  .announceTransaction({
    transactionPayload: JSON.parse(jsonPayload),
  })
  .then((e) => {
    console.log(e);
  });
