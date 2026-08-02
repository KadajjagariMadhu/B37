//Arrays
// str=[]  // empty array

// str1=[1,2,3,4,5,6,7,8,9] // homogenous array similor datatype elements

// str2=["madhu",33,undefined,null,{city:"bangalore",pincode:515305}]
// console.log(str2[3])

// console.log("====================")

// str3=["madhu",33,undefined,null,{city:"bangalore",pincode:515305}]
// console.log(str2[4].pincode)
// console.log("========================")
// //.length
// console.log(str3.length)

// str4=[1,2,3,4,5,6,7,8,9]
// console.log(str4[8])  // if u know the length of array then we can findout the last no in the array

// //or 

// console.log(str4.length-1)
// console.log(str4.length-2)// find the last number from array when we dont know the length of array
// console.log(str4[str4.length-3]) // we can write like this also

// xyz=["Admin","admin123"]

// xyz[1]="madhu123"

// const cred={
//     firstname:"madhu",
//     lastname:"k"
// }
// cred['firstname']="anilkumar"
// console.log(cred)

// //Array methods

// .sort()
// .reverse()
// .push()
// .pop()
// .shift()
// .unshift()
// .slice()
// .splice()
// .find()
// .includes()
// .indexOf()
// .length
// .join()

//push
arr5=["nagamm","ajay"]

arr5.push("vijith") //adding the elements to the array
arr5.push("ratnamma","rajanna") // at a time we can add the multiple elements to the array
console.log(arr5)


//pop

arr5.pop("ratnamma") // remove the last element of array
console.log(arr5) // at a time we can not remove the multiple elements from the array

arr6=["nanu","Manam","namma","Aimma","amma"] // if first letter is there in array that will display
                                            //  in the assending order
//sort

arr7 = arr6.sort()
console.log(arr6) // It will sort the elements in the assending order

//unshift

arr6.unshift("kumar")
console.log(arr6) // it will add the element beginning of the array

//shift

arr6.shift()
console.log(arr6) // it will remove the element beginning of the array 

//reverse

arr8= arr6.reverse()
console.log(arr7) // It will reverse the array

//includes

console.log(arr6.includes("amma1")) //It will check amma1 is there are not

//split
// converting string to array

mr1="rajenndra".split("")
console.log(mr1) 

mr2="this is selenium class".split(" ")
console.log(mr2)

mr3="this is javascript class".split("a")
console.log(mr3)

// join // converting Array ro string

m3= [ 'this', 'is', 'selenium', 'class' ].join() // if u will not give "" then comma will come 
console.log(m3) // it will convert array to string

m4= [ 'this', 'is', 'selenium', 'class' ].join('') // it will club 
console.log(m4)

m5= [ 'this', 'is', 'selenium', 'class' ].join(" ") //it will give with space after every word
console.log(m5)

//sort
  menuitems = [
    'Admin',        'PIM',
    'Leave',        'Time',
    'Recruitment',  'My Info',
    'Performance',  'Dashboard',
    'Directory',    'Maintenance',
    'Claim',        'Buzz'
  ].sort()

console.log(menuitems)

// 1 to 100
// 3 - fizz
// 5 - buzz
// 3 and 5 - fizzbuzz
// otherwise print number
//1
//2
//3 fiz

for(let i=1;i<=100;i++){
    if(i%3==0 && i%5==0)
    console.log("fizbuz")
else if(i%3==0){
    console.log("fiz")
}
else if(i%5==-0)
{
    console.log("buz")
}
else{
    console.log(i)
}
}

//reverse the string

// m6="kumbaranagenahalli";
// m7=m6.split("").reverse().join("")
// console.log(m7)

//palindrome

m6="madam";
m7=m6.split("").reverse().join("")
console.log(m7)

if(m7==m6){
    console.log("given string is a palindrome");
}
else{
    console.log("given string string is not a palindrome");
}

//Anagrams

m8="may"
m9="army"

m10=m8.split("").sort().join("")
m11=m9.split("").sort().join("")

if(m10==m11){
    console.log("given strings are anagrams")
}

else{
    console.log("given strings are not anagrams")
}    

// IndexOf

menuitems = [
    'Admin',        'PIM',
    'Leave',        'Time',
    'Recruitment',  'My Info',
    'Performance',  'Dashboard',
    'Directory',    'Maintenance',
    'Claim',        'Buzz'
  ]

  x=menuitems.indexOf("PIM")
  console.log(x)

  menuitems[x]="madhu"
  console.log(menuitems)

  //splice adding and removing the elements from the middle
  //splice(startingIndex,deleteCount,items1,items2)
    menuitems = [
      'Admin',        'PIM',
      'Leave',        'Time',
      'Recruitment',  'My Info',
      'Performance',  'Dashboard',
      'Directory',    'Maintenance',
      'Claim',        'Buzz'
    ]

  menuitems.splice(1,9) // removing
  console.log(menuitems)

  menuitems = [
    'Admin',        'PIM',
    'Leave',        'Time',
    'Recruitment',  'My Info',
    'Performance',  'Dashboard',
    'Directory',    'Maintenance',
    'Claim',        'Buzz'
  ]

  menuitems.splice(1,0,"madhu","raju") // adding
  console.log(menuitems)

  //slice
//get the elements partially from the array

  const extracted = menuitems.slice(1,5)
  console.log(extracted)

//map

mr11=["madhu","rajesh","dhanu"]
mr12=mr11.map(element=>element+"DBSQA")
console.log(mr12)

mr13=[2,6,10]
mr14=mr13.map(element=>element/2)
console.log(mr14)

// filter
m15=["venkataraju","dhanrah","madhuk","devaraju","dhibbannak"]
m16=m15.filter(element=>element.includes("raju"))
console.log(m16)

m17=[1,4,11,14,24,28,40,67,34,76,98,54,98,89]
m18=m17.filter(element=>element>50)
console.log(m18)

//find the even number
m19=[1,4,11,14,24,28,40,67,34,76,98,54,98,89]
m20=m19.filter(element=>element%2==0)
console.log(m20)

//find the odd number
m21=[1,4,11,14,24,28,40,67,34,76,98,54,98,89]
m22=m21.filter(element=>element%2!==0)
console.log(m22)

m23=[1,4,11,14,24,28,40,67,34,76,98,54,98,89]
m24=m23.filter(element=>element==4 || element==6)
console.log(m24)

// array.reduce((accumulator, currentValue) => {
//     return updatedAccumulator;
// }, initialValue);

let m25 = [10, 20, 30, 40];

let sum = m25.reduce((acc, curr) => {
    return acc - curr;
}, 30);

console.log(sum);

//concat
console.log("======================")

m26=m17.concat(m15)
console.log(m26)


