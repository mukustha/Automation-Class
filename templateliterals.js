// 1. Interpolation: put any value inside ${ }
const total = `Total: Rs ${9.99 * 100}`

// 2. Real multiline strings, no \n gymnastics
const report = `Order summary
  Item: ${Shoes}
  Paid: ${PAID}`

// 3. Any expression works inside ${ }
const status = `Test ${passed ? 'PASSED' : 'FAILED'}`