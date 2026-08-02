str=''
str1 ="madhu"
str2="rajesh"
str3="madhu and rajesh are brothers"
console.log(str3)

str4= `${str1} and ${str2} are friends`;
console.log(str4)
str5="1.understanding the user Stories\n2.preparing the test\n3.writing the test cases"
console.log(str5)

str="seleniumj"
console.log(str.length) // finding the length of string

console.log("=========================")

// console.log(str[0]) // finding the first letter of string
console.log(str.charAt(1));  // M

console.log("=========================")


//concat

str1="username"
str2="password"
str3=str1.concat(str2)
console.log(str3)

//toUppercase
str4="madhu".toUpperCase()
console.log(str4)

//toLowerCase

str5="NARAYANA".toLowerCase()
console.log(str5)

//trim

str6=" madhu ".trim()
console.log(str6)

//replace, it will replace particular letter in the string

str7="hyderbad".replace("d","k")
console.log(str7)
//replace all, it will replace all the letters from the string which is given 
str8="bangaluru".replaceAll("u","m").replaceAll("a","L")
console.log(str8)

//repeat it will print repeatedly
str9="raghava".repeat("3")
console.log(str9)

//'\t' it will give the space 
str10="namma\tH"
console.log(str10)

//includes, it will return true or false 
str11="dadavali".includes("dada")
console.log(str11)

//for of
str12="javascript"
for(let char of str12)
{
    console.log(char)
}


