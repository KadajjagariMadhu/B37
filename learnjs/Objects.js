credentials={
    username:"Admin",
    password:"admin123"
}
console.log(credentials.username)
console.log(credentials.password)
console.log(credentials['username']) // we can write like this also
console.log(credentials['password'])

// userDetails={
//     firstName:"Mahdu",
//     lastName:"K",
//     city:"bangalore",
//     Address:{
//         streetnumber: 123,
//         colony:"bc colony"
//     }
// }
//     console.log(userDetails.Address.streetnumber)
//     console.log(userDetails['Address']['streetnumber'])

userDetails={
    firstName:"Mahdu",
    lastName:"",
    city:"bangalore",
    Address:{
        streetnumber: "",
        colony:"bc colony"
    }
}
    // console.log(userDetails.Address.streetnumber)
    // console.log(userDetails['Address']['streetnumber'])

     userDetails.Address['streetnumber']="321" // upadate the property value
     userDetails['lastName']="M",

     userDetails['Gender']="Male" // add the new property
     userDetails.Address['colony']="mb colony"
     //delete userDetails.Gender
     userDetails['Gender']="M"
     console.log(userDetails)


    //  obj={
    //     orderNumber:""
    //  }

    //  //test1

    //  obj.orderNumber="123456"
    //  console.log(obj.orderNumber)

    //  //test 2
    //  console.log(obj.orderNumber)

    //  //output 123456

    //userDetails['firstName']=faker.person.firstname()
    userDetails['firstName']="Madhu"



