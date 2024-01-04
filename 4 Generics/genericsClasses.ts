class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair<string, number>("one", 2);

// pair.value.  // Getting key methods here
