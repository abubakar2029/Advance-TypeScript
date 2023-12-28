// by this a variable can have any of given types
function kgToLbs(weight: number | string): number {
  // weight.
  // here w'll get methods common to only string or number
  // to overcome it using Narrowing
  if (typeof weight == "number") {
    return weight * 2.2;
  } else {
    // weight.
    // it is showing all string methods now
    return parseInt(weight) * 2.2;
  }
}

console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));
