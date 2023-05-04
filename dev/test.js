const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

// bitcoin.createNewBlock(2389, "fhi4u422rygwfehb", "hfui375638tgif837r3tr");
// bitcoin.createNewBlock(3457, "nrgiurht984uy5jh5", "958uyhj5g3hguh3htug");
// bitcoin.createNewBlock(4567, "8uy8hgohgfyg33f", "67r364f3rv73f87gh823gfyg");
//
// console.log(bitcoin);
/*********************************************************************************/

// bitcoin.createNewBlock(2389, "fhi4u422rygwfehb", "hfui375638tgif837r3tr");
//
// bitcoin.createNewTransaction(100, "ALEXHYT45BY47Y4GYUFB", "JENNVN43G4HGBVYUEBF2873");
//
// bitcoin.createNewBlock(3457, "nrgiurht984uy5jh5", "958uyhj5g3hguh3htug");
//
// bitcoin.createNewTransaction(50, "ALEXHYT45BY47Y4GYUFB", "JENNVN43G4HGBVYUEBF2873");
// bitcoin.createNewTransaction(300, "ALEXHYT45BY47Y4GYUFB", "JENNVN43G4HGBVYUEBF2873");
// bitcoin.createNewTransaction(2000, "ALEXHYT45BY47Y4GYUFB", "JENNVN43G4HGBVYUEBF2873");
//
// bitcoin.createNewBlock(4567, "8uy8hgohgfyg33f", "67r364f3rv73f87gh823gfyg");
//
// console.log(bitcoin);
/*********************************************************************************/

// const previousBlockHash = "GTHTYJYJ67I8545YHTERHH";
// const currentBlockData = [
//     {
//         amount: 10,
//         sender: "ALEXHYT45BY47Y4GYUFB",
//         recipient: "JENNVN43G4HGBVYUEBF2873"
//     },
//     {
//         amount: 30,
//         sender: "ALEXHYT45BY47Y4GYUFB",
//         recipient: "JENNVN43G4HGBVYUEBF2873"
//     },
//     {
//         amount: 200,
//         sender: "ALEXHYT45BY47Y4GYUFB",
//         recipient: "JENNVN43G4HGBVYUEBF2873"
//     }
// ];
// const nonce = 1;
//
// console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));
//
// console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));
/*********************************************************************************/

// const blockchain = {
//     "chain": [
//         {
//             "index": 1,
//             "timestamp": 1664141732407,
//             "transactions": [],
//             "nonce": 100,
//             "hash": "0",
//             "previousBlockHash": "0"
//         },
//         {
//             "index": 2,
//             "timestamp": 1664141774402,
//             "transactions": [],
//             "nonce": 18140,
//             "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
//             "previousBlockHash": "0"
//         },
//         {
//             "index": 3,
//             "timestamp": 1664141957364,
//             "transactions": [
//                 {
//                     "amount": 12.5,
//                     "sender": "00",
//                     "recipient": "fc0583d03d1911edb234eb943a4cf8f1",
//                     "transactionId": "14bf03603d1a11edb234eb943a4cf8f1"
//                 },
//                 {
//                     "amount": 741,
//                     "sender": "DIMA",
//                     "recipient": "TOLIA",
//                     "transactionId": "48956df03d1a11edb234eb943a4cf8f1"
//                 },
//                 {
//                     "amount": 500,
//                     "sender": "ALEX",
//                     "recipient": "JOHN",
//                     "transactionId": "591a67203d1a11edb234eb943a4cf8f1"
//                 }
//             ],
//             "nonce": 14963,
//             "hash": "00003bc53e26d7401964917572c2da90852a7363f8aaf3bb4259ddfae00a7876",
//             "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
//         },
//         {
//             "index": 4,
//             "timestamp": 1664142085638,
//             "transactions": [
//                 {
//                     "amount": 12.5,
//                     "sender": "00",
//                     "recipient": "fc0583d03d1911edb234eb943a4cf8f1",
//                     "transactionId": "81c133c03d1a11edb234eb943a4cf8f1"
//                 },
//                 {
//                     "amount": 12,
//                     "sender": "JOHN",
//                     "recipient": "DAVE",
//                     "transactionId": "8fd57b103d1a11edb234eb943a4cf8f1"
//                 },
//                 {
//                     "amount": 1000,
//                     "sender": "STELLA",
//                     "recipient": "BILL",
//                     "transactionId": "973721103d1a11edb234eb943a4cf8f1"
//                 },
//                 {
//                     "amount": 90,
//                     "sender": "DIMA",
//                     "recipient": "LEONARD",
//                     "transactionId": "baaeb8103d1a11edb234eb943a4cf8f1"
//                 }
//             ],
//             "nonce": 46629,
//             "hash": "0000fd8d6a7bc9d1a39c07dc52ee8cef11163a105fca22a848883d5cf9b171e4",
//             "previousBlockHash": "00003bc53e26d7401964917572c2da90852a7363f8aaf3bb4259ddfae00a7876"
//         },
//         {
//             "index": 5,
//             "timestamp": 1664142128514,
//             "transactions": [
//                 {
//                     "amount": 12.5,
//                     "sender": "00",
//                     "recipient": "fc0583d03d1911edb234eb943a4cf8f1",
//                     "transactionId": "ce361bd03d1a11edb234eb943a4cf8f1"
//                 }
//             ],
//             "nonce": 122161,
//             "hash": "0000663b68aa66189ac33c1263956e0360e16adf0bf22e48c6bcce5be8f2b6ab",
//             "previousBlockHash": "0000fd8d6a7bc9d1a39c07dc52ee8cef11163a105fca22a848883d5cf9b171e4"
//         },
//         {
//             "index": 6,
//             "timestamp": 1664142130685,
//             "transactions": [
//                 {
//                     "amount": 12.5,
//                     "sender": "00",
//                     "recipient": "fc0583d03d1911edb234eb943a4cf8f1",
//                     "transactionId": "e7c561f03d1a11edb234eb943a4cf8f1"
//                 }
//             ],
//             "nonce": 30587,
//             "hash": "000081340e34f079535b2b85385e6bfced98a5613fe6049282403d08ab2faed6",
//             "previousBlockHash": "0000663b68aa66189ac33c1263956e0360e16adf0bf22e48c6bcce5be8f2b6ab"
//         }
//     ],
//     "pendingTransactions": [
//         {
//             "amount": 12.5,
//             "sender": "00",
//             "recipient": "fc0583d03d1911edb234eb943a4cf8f1",
//             "transactionId": "e91031703d1a11edb234eb943a4cf8f1"
//         }
//     ],
//     "currentNodeUrl": "http://localhost:3001",
//     "networkNodes": []
// }
//
// console.log("BLOCKCHAIN IS VALID: ", bitcoin.chainIsValid(blockchain.chain));

/*******************************************************************************************************/