class A{
    add(){
       console.log("this is dhibbanna")
    }
}
class B extends A{
    add(){
        console.log("this is madhu")
    }
}
class c extends B{
    add(){
        console.log("this is suresh")
    }
}
const b1=new c()
b1.add() //the clild class overrides the parent's class add() methods its called method overriding