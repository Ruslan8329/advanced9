// let isSuccess = false;

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("success");
//     } else {
//       reject("no success");
//     }
//   }, 2000);
// });
// console.log("promise", promise);

//////////////////////////////////////////////////////1//////////////////////////////

function promise(seconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds);
  });
}
promise(2000).then(() => {
  console.log("2 seconds");
});

///////////////////////////////////////////2////////////////////////////////////////

function firstFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Первая функция");
    }, 3000);
  });
}

function secondFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Вторая функция");
    }, 4000);
  });
}

firstFunction()
  .then((result) => {
    console.log(result);
    return secondFunction();
  })
  .then((result) => {
    console.log(result);
  });

/////////////////////////////////////////////////////3////////////////////////////

function function1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Первая");
    }, 6000);
  });
}

function function2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Вторая");
    }, 7000);
  });
}

function function3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Третья");
    }, 8000);
  });
}

Promise.all([function1(), function2(), function3()]).then((result2) => {
  console.log(result2);
});

/////////////////////////////////////////////4///////////////////////////////////////

function function4() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Четвертая");
    }, 1000);
  });
}

function function5() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Пятая");
    }, 4000);
  });
}

Promise.race([function4(), function5()]).then((result3) => {
  console.log(result3);
});
