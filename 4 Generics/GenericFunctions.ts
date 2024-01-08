function wrapInArray<T>(value: T) {
  return [value];
}

const wrapInArray2 = <T>(value: T): T[] => [value];

let numbers = wrapInArray<number>(1);
