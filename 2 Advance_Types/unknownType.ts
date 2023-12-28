let myVariable: unknown;

// You can assign any value to a variable of type "unknown"
myVariable = 10;
myVariable = "Hello, TypeScript!";
myVariable = [1, 2, 3];

// You cannot directly assign an "unknown" type to another type without type checking or assertion
// Error: Type 'unknown' is not assignable to type 'number'.
// let myNumber: number = myVariable; // Error

// Type checking and assertion are required to assign an "unknown" to a specific type
if (typeof myVariable === "number") {
  // Now it's safe to assign to a number variable
  let myNumber: number = myVariable;
}

// Type assertion can also be used
let myNumber: number = myVariable as number; // This assumes you are sure about the type

// Function that takes an "unknown" parameter and returns a string
function getString(value: unknown): string {
  if (typeof value === "string") {
    return value; // Type check allows this assignment
  } else {
    return "Default Value"; // Return a default value for other types
  }
}
