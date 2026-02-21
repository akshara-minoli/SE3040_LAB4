// Define promises to use with async/await
const myPromise = new Promise((resolve, reject) => {
 setTimeout(() => {
 resolve('Success from myPromise!');
 }, 1000);
});

const failingPromise = new Promise((resolve, reject) => {
 setTimeout(() => {
 reject('Error from failingPromise!');
 }, 500);
});

// Example 1: Basic async/await with success
async function myFunction() {
 try {
 const result = await myPromise;
 console.log(result);
 } catch (error) {
 console.log(error);
 }
}

// Example 2: async/await with error handling
async function myErrorFunction() {
 try {
 const result = await failingPromise;
 console.log(result);
 } catch (error) {
 console.log('Caught error:', error);
 }
}

// Example 3: Multiple async operations
async function multipleAsync() {
 try {
 console.log('Starting multiple async operations...');
 
 const result1 = await new Promise(resolve => {
 setTimeout(() => resolve('First operation complete'), 800);
 });
 console.log(result1);
 
 const result2 = await new Promise(resolve => {
 setTimeout(() => resolve('Second operation complete'), 600);
 });
 console.log(result2);
 
 console.log('All operations finished!');
 } catch (error) {
 console.log('Error in multiple operations:', error);
 }
}

// Run all examples
console.log('=== Async/Await Example 1: Success Case ===');
myFunction();

console.log('=== Async/Await Example 2: Error Handling ===');
myErrorFunction();

console.log('=== Async/Await Example 3: Multiple Operations ===');
multipleAsync();