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
class a3 extends a2{
    m5(){
     console.log("this is a m5")
    }
    m6(){
     console.log("this is a m6")
    }
}
const a4=new a3()
a4.m1()
a4.m2()
a4.m3()
a4.m4()
a4.m5()
a4.m6()