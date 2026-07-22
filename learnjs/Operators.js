
//Arithmetic operator
a=10;
b=20;
console.log(a+b); //30
console.log(a-b); //-10
console.log(a*b); //200
console.log(b/a); //2
console.log(b%a); //0

//a++;   // ✅ Post Increment
//++a;   // ✅ Pre Increment

//b--;   // ✅ Post Decrement
//--b;   // ✅ Pre Decrement

// a++
// console.log(a);
// b--
// console.log(b);    

console.log("==========================");

//Relational & Comparision Operators

console.log(1==1); //loose equality it will check value only
console.log(2===2);

console.log(1=="1");
console.log(1=="madhu");
console.log(2==="2"); // Strict equality it will check value and data type

console.log("==============================");

console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

console.log("==============================");

// Assignment Operators

// a=10;
// +=
// -=
// *=
// /=
// %=

a+=5 // a=a+5
console.log(a);
a-=6 // a=a-6
console.log(a)
b*=4 //b=b*4
console.log(b);
b/=5 //b=b/5
console.log(b);
b%=4 // b=b%4
console.log(b);

console.log("============================");
//logical operators

marks=40;

console.log(marks>=100 && marks<=100);
console.log(marks==40 && marks<=41);
console.log(false && true);
console.log(false && false);

console.log("===============================");

console.log(marks>=60 || marks<=50);
console.log(true || false);
console.log(false || true);
console.log(true || true);
console.log(false || false);

console.log("========================================")

console.log(marks!=50 || marks!=60);
console.log(!false);
console.log(!true);

console.log("========================================");

const value1 = "madhu";
const value2 = "dhibbanna";

//condition ? value1 : value2

const result= 2==="2" ? value1:value2

    console.log(result);



