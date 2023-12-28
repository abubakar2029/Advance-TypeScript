// As TS has strict null checking we can't pass null values

function greet(name: string | null | undefined) {
  if (name) {
    console.log(name);
  } else {
    console.log("Abu Bakar");
  }
}

greet(undefined);
