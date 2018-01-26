// function doAsyncTask(cb) {
//   console.log("Init");
//   setTimeout( () => {
//     console.log("Async task calling callback");
//     cb();
//   },1000);
//   console.log("End");
// }
//
//
// doAsyncTask( () => {
//   console.log("callback called");
// });

/**/
//Using promise
function doAsyncTaskNew(error) {
  var promise = new Promise((resolve, reject) => {
    setTimeout( () => {
      console.log("Async wrok complete");
      if(error) {
        reject('error by error');
      } else {
        resolve('success');
      }
    }, 1000);
  });
  console.log(promise);
  return promise;
}

//doAsyncTaskNew();

//doAsyncTaskNew(0).then(() => console.log("Task Complete!"));

doAsyncTaskNew(1).then(
  (val) => console.log("Task Complete!", val),
  (val) => console.log("Task Errored!", val)
);

/**/
//Chaining
Promise.resolve("done")
  .then(
    (success) => {console.log(success);return "done2";},
    (error) => {console.log(error);}
  )
  .then(
    (success) => {console.log(success);},
    (error) => {console.log(error);}
  );


  Promise.resolve("done")
    .then(
      (success) => {console.log(success);throw new Error("Fail");},
      (error) => {console.log(error);}
    )
    .then(
      (success) => {console.log(success);},
      (error) => {console.log(error);}
    );


Promise.resolve('done')
    .then((val) => {throw new Error("fail")})
    .then((val) => console.log(val))
    .catch((err) => console.error(err));
