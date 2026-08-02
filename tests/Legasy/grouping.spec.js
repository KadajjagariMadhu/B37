import{test,expect}from "@playwright/test"

test.describe("smoke test suite",()=>{

 test("verify test cse1",async({page})=>{
    test.fail()
    //fixme
    //slow
    console.log("test case1")
    expect(5).toBe(8)
 })
 test("verify test case2",async({page})=>{
    console.log("verify test case2")

 })
 test("verify test case3",async({page})=>{
   console.log("verify test case3")
 })
 
})

test.describe("sanity test suite",()=>{

 test("verify test cse4",async({page})=>{
    console.log("test case4")
 })
 test("verify test case5",async({page})=>{
    console.log("verify test case5")

 })
 test("verify test case6",async({page})=>{
   console.log("verify test case6") 
 })
 
})
//Gouping and Annotations
//.only
//.skip
//.fail
//.fixme
//.slow