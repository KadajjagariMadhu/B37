class a1{
m1(){
    console.log("this is m1")
}
m2(){
    console.log("this is m2")
}
}
class a2 extends a1{
    m3(){
     console.log("this is a m3")
    }
    m4(){
     console.log("this is a m4")
    }

}
const a3=new a2()
a3.m1()
a3.m2()
a3.m3()
a3.m4()