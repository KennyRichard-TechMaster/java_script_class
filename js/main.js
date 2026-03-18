// // external javascript
// console.log("i am learning javascript");
// function myFunction() {
//   document.getElementById("demo").innerHTML = "Congratulations";
// }
// let fname = "Kenny";
// let mname = " Olugbusi";
// let lname = " Richard";
// let fullname = fname + mname + lname;
// console.log(fullname);

// let x = 10;
// // x = 60;
// let y = 40;
// let z = x + y;
// // alert(z);

// const x1 = 100;
// // x1 = 400;
// console.log(x1);

// // typeof fname;
// console.log(typeof "kenny");
// console.log(typeof 2);
// console.log(typeof true);
// console.log(typeof 3.142);

// let button = document.getElementById("btn");
// button.onclick = function () {
//   alert("You clicked the button");
// };

// operators

// let a = 10;
// let b = 30;
// let c = a + b;
// console.log(c);

// let x1 = 5;
// let y1 = 15;
// let z1 = x1 * y1;
// console.log(z1);

// let A1 = 800;
// let B1 = 100;
// let C1 = A1 / B1;
// console.log(C1);

// let A2 = 69;
// let B2 = 27;
// let C2 = A2 - B2;
// console.log(C2);

// let X2 = 3;
// let Y2 = 5;
// let Z2 = X2 ** Y2;
// console.log(Z2);

// let _x = 101;
// let _y = 30;
// let _z = _x % _y;
// console.log(_z);

// let _d = 20;
// _d++;
// console.log(_d);

// let m = 51;
// m--;
// console.log(m);

// let x = 5;
// let y = 3;
// let z = x < y;
// console.log(z);

// let _x = 15;
// let _y = 5;
// let _z = _x > _y;
// console.log(_z);

// let a = 10;
// let b = 10;
// let c = a >= b;
// console.log(c);

// let _a = 50;
// let _b = 30;
// let _c = _a <= _b;
// console.log(_c);

// let m = 5;
// let p = 5;
// let q = m != p;
// console.log(q);

// let _m = 30;
// let _n = 30;
// let _f = _m !== _n;
// console.log(_f);

// let d = 10;
// let f = 10;
// let u = d == f;
// console.log(u);

// let __d = 1000;
// let __f = 10;
// let __u = d === f;
// console.log(__u);

// java script conditional statements
// let x = 10;
// let y = 10;
// if (x > y) {
//   console.log("yes, x is > y");
// } else {
//   console.log("no, x is < y");
// }
// if (x > y) {
//   alert("yes x is greater than y");
// } else if (x == y) {
//   alert("x=y");
// } else {
//   alert("no");
// }
// const today = new Date().getDay();
// switch (today) {
//   case 0:
//     day = "Sunday";
//     console.log(day);
//     break;
//   case 1:
//     day = "Monday";
//     console.log(day);
//     break;
//   case 2:
//     day = "Tuesday";
//     console.log(day);
//     break;
//   case 3:
//     day = "Wednesday";
//     console.log(day);
//     break;
//   case 4:
//     day = "Thursday";
//     console.log(day);
//     break;
//   case 5:
//     day = "Friday";
//     console.log(day);
//     break;
//   case 6:
//     day = "saturday";
//     console.log(day);
// }

// let uche_acc_balance = 1500;
// let text = uche_acc_balance > 20000 ? console.log("Yes") : console.log("No");

// let price = 100000;
// let vip_customers = true;
// let discount = vip_customers ? 0.1 : 0;
// let total = 100000 - price * discount;
// console.log(total);

// let current_hour = new Date().getHours();
// if (current_hour < 12) {
//   greeting = "good morning";
//   console.log(greeting);
// } else if (current_hour > 12) {
//   greeting = "good afternoon";
//   console.log(greeting);
// } else {
//   greeting = "good evening";
//   console.log(greeting);
// }

// const today = new Date().getDay();
// // new Month().getMonth();

// // new Year().getYear();

// switch (today) {
//   case 0:
//     day = "Sunday";
//     console.log(day);
//     break;
//   case 1:
//     day = "Monday";
//     console.log(day);
//     break;
//   case 2:
//     day = "Tuesday";
//     console.log(day);
//     break;
//   case 3:
//     day = "Wednesday";
//     console.log(day);
//     break;
//   case 4:
//     day = "Thursday";
//     console.log(day);
//     break;
//   case 5:
//     day = "Friday";
//     console.log(day);
//     break;
//   case 6:
//     day = "saturday";
// }

// const time = new Date().getHours();
// const minute = new Date().getUTCMinutes();
// const month = new Date().getMonth();
// const year = new Date().getFullYear();
// const date = new Date().getDate();
// const seconds = new Date().getUTCSeconds();

// console.log(
//   day +
//     ", " +
//     date +
//     "-" +
//     3 +
//     "-" +
//     year +
//     " " +
//     time +
//     ":" +
//     minute +
//     ":" +
//     seconds,
// );

// Javascript Loops
// 1. for loop

// let num = "";

// for (let x = 1; x <= 25; x++) {
//   num += " Number is " + x;
// }
// console.log(num);

// const name = "uchechukwu";

// for (let i = 0; i < name.length; i++) {
//   let letter = name[i];
//   console.log(letter);
// }

// while loop

// let j = 0;
// while (j < 101) {
//   console.log(j);
//   j++;
// }

// for (let _c = 1; _c < 101; _c++) {
//   console.log("Number is", +_c);
// }

// let _b = 2;
// while (_b < 200) {
//   console.log("Number is", _b);
//   _b++;
// }

// while

const name = "kehinde";
let x = 0;
while (x < name.length) {
  let letters = name[x];
  console.log(letters);
  x++;
}

// random account nummber
// Generate 10-digit account number
let accNum = "";

for (let i = 0; i < 10; i++) {
  accNum += Math.floor(Math.random() * 10);
}

let invisible = accNum.slice(0, 4) + "******";
console.log(invisible);
