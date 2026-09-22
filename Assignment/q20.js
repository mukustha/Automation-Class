function totalPrice(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// Tests
console.log(totalPrice([{ price: 10 }, { price: 5 }, { price: 20 }]));  // 35
console.log(totalPrice([{ price: 100 }]));                              // 100
console.log(totalPrice([]));                                            // 0