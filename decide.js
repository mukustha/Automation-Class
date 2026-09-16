const balancePaisa = 250000;   // Rs 2,500
const amountPaisa  = 10;   // Rs 3,000

if (amountPaisa > balancePaisa) {
  console.log("Insufficient balance");
} else if (amountPaisa == 0) {
  console.log("Enter an amount");
} else {
  console.log("Proceed to PIN");
}