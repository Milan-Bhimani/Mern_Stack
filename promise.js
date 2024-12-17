
let promise = new Promise((resolve, reject) => {
  error = false;
  if (!error) {
    resolve('Data successfully fetched');
  } else {
    reject('Error fetching data');
  }
});

promise
 .then((data) => {
    console.log(data);
  })
 .catch((error) => {
    console.error(error);
  })
.finally(() => {
  console.log('This will always run');
});

console.log(promise);
    
new Promise((resolve, reject) => {
  error = false;
  if (!error) {
    resolve('Data successfully fetched');
  } else {
    reject('Error fetching data');
  }
})