// I'm going to import math.js to perform math operations

import doSomeMath from './math.js' // Important: while importing, don't miss the extension ".js"


// To import other modules
// Since these modules were not exported as default, we have to destructure
import { addTwo, multiply, subtract } from './math.js'


// Import everything from the module
import * as everything from './math.js'

console.log(addTwo(5, 5))
console.log(subtract(5, 5))
console.log(doSomeMath.addTwo(5, 5))
console.log(everything.multiply(5, 5))
console.log(everything)