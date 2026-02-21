// Example 1: Promise that resolves (success case)
console.log("=== Promise Example 1: Success Case ===");
const condition1 = true;
const myPromise1 = new Promise((resolve, reject) => {
 if (condition1) {
 resolve('Success!');
 } else {
 reject('Failure!');
 }
});
myPromise1.then((result) => {
 console.log(result);
}).catch((error) => {
 console.log(error);
});

// Example 2: Promise that rejects (failure case)
console.log("=== Promise Example 2: Failure Case ===");
const condition2 = false;
const myPromise2 = new Promise((resolve, reject) => {
 if (condition2) {
 resolve('Success!');
 } else {
 reject('Failure!');
 }
});
myPromise2.then((result) => {
 console.log(result);
}).catch((error) => {
 console.log(error);
});

// Example 3: Promise with async operation
console.log("=== Promise Example 3: Async Operation ===");
const asyncPromise = new Promise((resolve, reject) => {
 setTimeout(() => {
 const randomSuccess = Math.random() > 0.5;
 if (randomSuccess) {
 resolve('Async operation succeeded!');
 } else {
 reject('Async operation failed!');
 }
 }, 1000);
});

asyncPromise.then((result) => {
 console.log(result);
}).catch((error) => {
 console.log(error);
});