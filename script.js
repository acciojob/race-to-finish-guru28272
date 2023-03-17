const output = document.querySelector(`#output`);

// function promise1(params) {
//   let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`promise 1`);
//     }, 3000);
//   });
//   return myPromise;
// }
// function promise2(params) {
//   let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`promise 2`);
//     }, 2000);
//   });
//   return myPromise;
// }

// function promise3(params) {
//   let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`promise 3`);
//     }, 5000);
//   });
//   return myPromise;
// }

// function promise4(params) {
//   let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`promise 4`);
//     }, 1000);
//   });
//   return myPromise;
// }

// function promise5(params) {
//   let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`promise 5`);
//     }, 1500);
//   });
//   return myPromise;
// }
// let promises = [promise1(), promise2(), promise3(), promise4(), promise5()]
// Promise.any(promises).then(
//   (res) => {
//     output.innerHTML = res;
//   });

// ---------------------------

let myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`promise 1`);
  }, 3000);
});

let myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`promise 2`);
  }, 2000);
});

let myPromise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`promise 3`);
  }, 5000);
});

let myPromise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`promise 4`);
  }, 1000);
});

let myPromise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`promise 5`);
  }, 1500);
});
window.promises = [
	myPromise1,
	myPromise2,
	myPromise3,
	myPromise4,
	myPromise5,
];

Promise.any([
window.promises
]).then((res) => {
  output.innerHTML = res;
});
// Do not change the code above this
// add your promises to the array `promises`
