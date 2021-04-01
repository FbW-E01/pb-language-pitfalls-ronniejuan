// # Pitfalls 

// #### 1. NaN
// **Question: Comment your answer in your js file**: What does NaN stand for? 
// * Check if `"hello"` is NaN. 
// * Check if `3` is NaN.
// * What is the type of NaN?






console.log(isNaN("hello"))
console.log(isNaN(3))

console.log(typeof NaN)



// #### 2. Rounding 
// ```javascript
// console.log(0.1 * 0.2);
// ```
// The above in JavaScript will print: `0.020000000000000004`. 
// Use a method to make sure that only `0.02` is printed.

let e = 0.020000000000000004;
console.log(e.toFixed(2));

// #### 3. Infinity
// * Divide Infinity by `0`. 

console.log(Infinity/0)


// * Divide Infinity by Infinity. 

console.log(Infinity/Infinity);


// * Divide `1` by `0`.

console.log(1/0);