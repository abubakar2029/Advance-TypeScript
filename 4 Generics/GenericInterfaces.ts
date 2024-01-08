// http://mySite.com/products
// http://mySite.com/users

// <-----------------Waste Code---------------------->
interface ResultProducts {
  data: Product;
  error: string | null;
}
interface ResultUsers {
  data: User;
  error: string | null;
}
// <-----------------Waste Code---------------------->

// instead of code above we use Genercs in interfaces
interface Result<T> {
  data: T | null;
  error: string | null;
  // bcz the data or error might be null
}

function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}

interface Product {
  title: string;
}

interface User {
  userName: string;
}

let result = fetch<Product>("url");
result.data?.title;