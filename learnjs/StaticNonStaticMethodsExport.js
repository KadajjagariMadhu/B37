
class a1{
    add(){
        console.log("this is a nonstatic method")
    }
    sub(){
        console.log("this is a nonstatic method1")
    }
    multi(){
        console.log("this is a nonstatic method2")
    }
    division(){
        console.log("this is a nonstatic method3")
    }
    static modulus(){
        console.log("this is a nonstatic method4")
    }

}
  const b1=new a1()
  b1.add()
  b1.sub()
  b1.multi()
  b1.division() // Non static methods we can call by its reference variable
            //  like Obj/ref variable.methodName
  a1.modulus() // static method we can call by its name like className.methodName

  export {a1};
  export default b1;
  

  // for accesing the non-static methods, we need to create the objects then with the help of
  // its reference variable we can call the methods
  // with single obj we can call multiple methods in a class
  
  