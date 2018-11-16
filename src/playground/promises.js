const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'Scott',
    //   age: 24
    // });
    // Will not run. Promises can only resolve or reject one time.
    // If you need to return multiple properties, use an object.
    // resolve('This is my other resolved data');
    reject('Something went wrong!');
  }, 3000)
});

console.log('before');

// Will run the promise. If rejected, the catch will run.
promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log('error: ', error);
})

console.log('after');