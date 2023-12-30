class Account {
  id: number;
  owner: string;
  balance: number;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.balance = balance;
    this.owner = owner;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this.balance += amount;
  }
}

// Creating an object
let account = new Account(1, "Abu Bakar", 100);

console.log("============");
console.log("Object details", account);

account.deposit;
account.deposit(20);
console.log("============");
console.log(account.balance);
