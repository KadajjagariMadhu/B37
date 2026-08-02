
class username{

    add(){
     console.log("no argument")
    }
    add(a){
     console.log("argument1")
    }
    add(a,b){
     console.log("argument2")
    }
}
 
const v1=new username()
v1.add();
v1.add(10);
v1.add(10,15); // last method will be executed
