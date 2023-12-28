let speed: number | null = null;
let ride = {
  //   Logical OR
  speed: speed || 30,
  // Falsy (undefined, null, '', false, 0)

  //   Nullish coalsing operator
  speed1: speed ?? 30,
  //   It specifically checks for null or undefined and does not consider other falsy values.
};

// Similarly Logical AND
// => return value if both sides are true
