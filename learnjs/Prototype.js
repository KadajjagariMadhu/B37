class B{
    v1=10
    x1(){
    console.log("madhu")
    }
    x2(){
    console.log("rajesh")
    }
}
B.prototype.v2=20
B.prototype.v3=function(){
    console.log("manjunatha nagara")
}
const d1=new B()
// d1.x1()
// d1.x2()
//console.log(d1.v1)
console.log(d1.v2)
d1.v3()

