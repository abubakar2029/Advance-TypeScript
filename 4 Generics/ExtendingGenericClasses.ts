interface Product {
  name: string;
  price: number;
}

// <------------Pass On Generic Type Perimeter------->
class Store<T> {
  // instead of creating constructor we make it's value to empty string
  protected objects: T[] = [];
  add(obj: T): void {
    this.objects.push(obj);
    // Argument of type 'Product' is not assignable to parameter of type 'T'.===> Solved it by generic Constraint
  }
}

class CompressibleStore<T> extends Store<T> {
  compress() {}
}
// the perimeter of base class is going to use in child class

let store = new CompressibleStore<Product>();
store.compress();

// <------------Ends----------->

// <------------Pass On Generic Type Perimeter------->
class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this.objects.find((obj) => obj.name === name);
  }
}
