export const addTwo = (a, b) => a + b
export const multiply = (a, b) => a * b
export const subtract = (a, b) => a - b

// Method 1 :- Function
// export default (function doSomeMath() {
//     return {
//         addTwo,
//         multiply,
//         subtract
//     }
// }) // if we use this kind fo export, the doSomeMath.addTwo ❌ it fails because doSomeMath is a function, not an object

// Method 2 :- Function

// export default (function doSomeMath() {
//     return {
//         addTwo,
//         multiply,
//         subtract
//     }
// })()  //👉 Notice the () at the end ✅ ,Now it exports the object, not the function

// Method 3: - Object
const doSomeMath = {
    addTwo,
    multiply,
    subtract
}

export default doSomeMath