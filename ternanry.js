// condition ? valueIfTrue : valueIfFalse

const isKycVerified = false;

const tier = isKycVerified ? "Verified" : "Basic";
const limitPaisa = isKycVerified ? 2500000 : 500000;

console.log(`${tier} account, limit Rs ${limitPaisa / 100}`);