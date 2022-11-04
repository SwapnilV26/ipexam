
// function Div(n1, n2) {
//     let promise = new Promise(function (resolve, reject) {
//         if (n2 > 0){
//             resolve(n1/n2);
//         }
//         else{
//             reject("Denominator can not be negative or 0")
//         }
//    });
//     return promise;
// }

// Div(10, 0)
// .then((e => console.log(e)))
// .catch(e => console.log(e));

function errorHandle() {
    const message = document.getElementById("print");
    message.innerHTML = "";
    let x = document.getElementById("num").value;
    try {
      if(x == "") throw "empty";
      if(isNaN(x)) throw "not a number";
      x = Number(x);
      if(x < 5) throw "too low";
      if(x > 10) throw "too high";
    }
    catch(err) {
      message.innerHTML = "Input is " + err;
    }
  }