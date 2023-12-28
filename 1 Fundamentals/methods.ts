let employee: {
  name: string;
  readonly id: number; // cannot change value outside object
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Abu Bakar",
  retire(date) {
      console.log(date);
    //   this.id=9, Giving error bcz it's read only
  },
};

employee.retire(new Date);
console.log("==========");
