import{test,expect}from "@playwright/test"
test.beforeEach(async({page})=>{
    console.log("before each")
})
test.afterEach(async({page})=>{
    console.log("after each")
})
test.beforeAll(async({page})=>{
    console.log("beforeall")
})
test.afterAll(async({page})=>{
    console.log("after all")
})
test.describe("smoke test suite",()=>{

 test("verify test cse1",async({page})=>{

    console.log("test case1")
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