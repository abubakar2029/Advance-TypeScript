function wrapInArray<T>(value: T) {
  return [value];
}

let numbers = wrapInArray<number>(1);
