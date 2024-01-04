// Type assertions in TypeScript are a way for you to tell the compiler that you know more about the type of a value than TypeScript does.
//  It doesn't perform any runtime checking 
//  It's essentially a way to silence TypeScript's type-checker and assume that a variable is of a specific type.

let element = document.getElementById("p") as HTMLInputElement;
let element1 = <HTMLInputElement>document.getElementById("p");

element.value;

// Type assertions are powerful but should be used with caution. If you're asserting a type and it turns out to be incorrect, you might encounter runtime errors.
let userInput: unknown = getUserInput();
let userName: string;

// Using type assertion after checking the type
if (typeof userInput === "string") {
  userName = userInput; // TypeScript now knows it's a string
} else {
  userName = "Default";
}

// Alternatively
userName = (userInput as string) || "Default";
