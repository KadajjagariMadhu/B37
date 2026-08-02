// function names(){
//     console.log("madhu");
//     console.log("rajesh")
//     console.log("kantha");
// }
// names()

names =()=>{
    console.log("madhu");
    console.log("rajesh")
    console.log("kantha");
}
names()

console.log("===========================");

// function count(){
//     console.log("kn palli")
// }
// count()

count=()=> console.log("kn palli")

count()

console.log("===============================")

function add1(n1,n2){
    console.log(n1+n2)
}
add1=(n1,n2)=>console.log(n1+n2)
add1(10,21)

console.log("====================");

function square(n1){
    console.log(n1*n1)
}
square(9)

square =n1 => console.log(n1*n1) // Arrow function
square(8)