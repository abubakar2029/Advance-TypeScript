type Customer = {
  birthday: Date;
};

function getCustomer(params: number): Customer | null | undefined {
  return params === 0 ? null : { birthday: new Date() };
}

// let customer = getCustomer(0); // undefined

let customer = getCustomer(1);
// Optional Chaining bcz customer.birthday might be undefine
console.log(customer?.birthday);
// Optional Chaining here
console.log(customer?.birthday.getDate);

// It will only check for null or undefined not other falsy values
