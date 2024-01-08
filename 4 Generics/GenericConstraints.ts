// <--------Example Starts---------->
function echo<T>(value: T): T {
  return value;
}

echo("1");
echo(true);
// <--------Example Ends---------->

// <-------Using Constraints----------->
function echo1<T extends number | string>(value: T): T {
  return value;
}

// echo1(true);  // getting error here
echo1(1); // now arguments are restricted

// <-------Constraints Ends----------->

// <-------Different Types----------->
interface Person {
  name: string;
}
function echo2<T extends Person>(value: T): T {
  return value;
}

echo2({ name: "Abu Bakar" });

// using class as a type 
class Person1 {
  constructor(public name: string) {
    console.log(name);
  }
}
function echo3<T extends Person1>(value: T): T {
  return value;
}

echo2(new Person1("Abu Bakar"));
// <-------Different Types Ends----------->
