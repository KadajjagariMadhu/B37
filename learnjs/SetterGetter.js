
class namana{
    name;
    printName(name){
    this.name=name //setter method it will set the data

    }
    printMessage(){
        console.log("hey Hi Good Morning:"+this.name)// getter method it will get the data
    }
}

const c1=new namana()
c1.printName("rajesh")
c1.printMessage()

//Encapsulation Binding the data between the methods in a class is called encapsulation
// it will create the dependency between 2 methods in a class 