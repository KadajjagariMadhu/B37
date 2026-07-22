// functions with parameter
// functions without parameter
// functions with return keuword
// function with default parameter 

// function declaration only

function employee() {
    console.log("hello madhu");
}
console.log("======================")


// calling function without parameter

function employee() {
    console.log("hello madhu");
}
employee()

console.log("==========================")

function add() {
    console.log(5);
    console.log(6);
    console.log(5 + 6);
}
add();

console.log("=======================");

//calling function with parameter

function users(nam1, nam2) {
    console.log(nam1);
    console.log(nam2);
    console.log(nam1 + nam2);

}
users(5, 6);
users(20, 40);

// function username1(name="raju"){ // raju is default value that's why
//                                //  eventhough not calling the function with the parameter
//                                //  it will print default name as a raju
//     console.log("hello " + name);

// }
//     username1(); // it will print default value, if your not giving the parameter
// if we pass the parameter then it will print this parameter
function username2(name = "raju") {
    console.log("hello " + name);
}
username2("dhanunjaya"); //instead of default value it is printing dhanunjaya because I gave passed parameter

function username3(name) {
    console.log("hey Hi " + name);
}

username3("hemanth");

function username4(name="Anilkumar",value ="M"){
 console.log("hello "+name+value);
}
username4("rajesh ", "K");

// RETURN

function add1(){
    return 4+7;
}
 add1() // it will execute inside but it will not print
 console.log(add1()); // it will execute and it will print

 function add2(a,b){
    return a+b;
 }
 //add2(5,7); // function without return

 function add2(a,b){
    return a+b;
 }
 console.log(add2(5,7)); //function with return

 function add2(a,b){
    return a+b;
 }
 let name2=add2(5,8);
 console.log(name2); //function with return by using variable

 function subtraction(v1,v2){

 return(v1-v2)

 }
//console.log(subtraction(20,10))
//x=subtraction(20,10)
//console.log(x)

function multiply(n1,n2){
 console.log(n1*n2)
}
multiply()// It wll come Nan beacause we are not passing any value
multiply(20,10)


function multiply1(n1=100,n2=200){
 console.log(n1*n2)
}
 multiply1() // no need to pass any value here because we alreeady passed
             //  while declaring the function
             // here printing the default value if u pass then
             //  default value override and will print whatever we paased while calling the function
function multiply1(n3=100,n4=200){
 console.log(n3*n4)
}
 multiply1(3) // n3 value will get override if we mention one value while calling the function

 function multiply1(n5=100,n6=200){
 console.log(n5*n6)
}
 multiply1(3,"madhu") //Nan will come if we pass one number and another one string 
 
 function userName1(){
    return("admin") //it will print admin as a username2
    //return(4+7)  // it will print 11
 }
 // awaiy page.locator(xpath).fill(userName1()) this is also correct

 console.log(userName1())

 function namemadhu(){
    console.log("madhu")
 }
 function namedhibbanna(){
    console.log("dhibbanna") // calling one function inside another function
    namemadhu()
}
    namedhibbanna()
