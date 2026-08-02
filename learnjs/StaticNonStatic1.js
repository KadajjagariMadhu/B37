    class xyz{

    x=10;
    y=20;
    name="madhu";

        m1(){
         console.log("this is a nonstatic methodm1")
         console.log(this.x) // access the x value form the variable
        }
        m2(){
         console.log("this is a nonstatic methodm2")
         console.log(this.y) // access the y value from the variable
         console.log(this.name)
         this.m1()
        }
        static m3(){
         console.log("this is a non static methodm3")
        }
        static m4(){
         console.log("this is a non static methodm4") 
         this.m3()

        }
    }
    const a1=new xyz();
    // a1.m1();
     a1.m2();
    // xyz.m3();
    xyz.m4();