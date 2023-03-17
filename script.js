window.promises = [];
const output = document.querySelector(`#output`);

function promise1(params) {
  let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`promise 1`);
    }, 3000);
  });
  return myPromise;
}
function promise2(params) {
  let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`promise 2`);
    }, 2000);
  });
  return myPromise;
}

function promise3(params) {
  let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`promise 3`);
    }, 5000);
  });
  return myPromise;
}

function promise4(params) {
  let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`promise 4`);
    }, 1000);
  });
  return myPromise;
}

function promise5(params) {
  let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`promise 5`);
    }, 1500);
  });
  return myPromise;
}

Promise.any([promise1(), promise2(), promise3(), promise4(), promise5()]).then(
  (res) => {
    output.innerHTML = res;
  }
);

// Do not change the code above this
// add your promises to the array `promises`
