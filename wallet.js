//const merchantName = "Qrius Store";
//let balancePaisa = 250000;        // Rs 2,500.00
//cosnt isKycVerified = true;

//const amountPaisa = 150000;        // Rs 1,500.00
//const cashbackPaisa = amountPaisa * 0.02;
//console.log(`Merchant: ${merchantName}`);
//console.log(`KYC: ${isKycVerified ? 'Verified' : 'Not Verified'}`);
//console.log(`Sent: ${amountPaisa / 100}`);
//console.log(`Cashback: ${cashbackPaisa / 100}`);
//console.log(`Balance: ${balancePaisa / 100}`);

const merchantName = "Qrius Store";
let balancePaisa = 250000; // Rs 2,500.00
const isKycVerified = true;

const amountPaisa = 150000; // Rs 1,500.00
const cashbackPaisa = amountPaisa * 0.02;

// balance covers it, KYC done, amount above zero
const canSend =
  isKycVerified &&
  amountPaisa > 0 &&
  balancePaisa >= amountPaisa;

// update balance after transfer
if (canSend) {
  balancePaisa -= amountPaisa;
}

// print receipt with one template literal
console.log(`Merchant : ${merchantName}
KYC      : ${isKycVerified ? "verified" : "not verified"}
Sent     : Rs ${(amountPaisa / 100).toFixed(2)}
Cashback : Rs ${(cashbackPaisa / 100).toFixed(2)}
Balance  : Rs ${(balancePaisa / 100).toFixed(2)}
Approved : ${canSend}`);

// TODO: canSend, balance covers it, KYC done, amount above zero
// TODO: update balancePaisa after the transfer
// TODO: print the receipt with one template literal