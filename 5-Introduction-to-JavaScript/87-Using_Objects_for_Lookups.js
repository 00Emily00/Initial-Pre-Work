// Objects can be seen as key/value storage. You are able to look up values using the key. So you use the object and with the brackets you can put a key and it will give you what that key's value is

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }
  result = lookup[val];
  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");