function calculateSumAndProduct(array) {
  let sum = 0;
  let product = 1;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    product *= array[i];
  }

  return { sum, product };
}


const numbers = [1, 2, 3, 4, 5];
const result = calculateSumAndProduct(numbers);
console.log("Sum:", result.sum); 
console.log("Product:", result.product); 
