// Import statement
import { SomeModule } from "./someModule"

// Function with a return statement
function multiply(a: number, b: number): number {
  return a * b
}

interface Ansub {
  name: string
  age: number
}

// Exporting a default value
export default multiply

// Default keyword in a switch statement
function getColor(code: number): Ansub {
  let color: string
  switch (code) {
    case 1:
      color = "Red"
      break
    case 2:
      color = "Blue"
      break
    default:
      color = "Default Color"
      break
  }
  return color
}

// Usage of the exported default value
console.log(multiply(5, 2))
