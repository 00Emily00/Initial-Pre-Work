// an application for accessing objects

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop){
// Only change code below this line
  for (let i = 0; i < contacts.length; i++) {
      debugger;
      if (name == contacts[i].firstName && contacts[i].hasOwnProperty(prop)){
          return contacts[i][prop];
      } else if (!contacts[i].hasOwnProperty(prop) && contacts[i].firstName == name) {
        return "No such property";
      } 
  } 
  return "No such contact";
}

// Change these values to test your function
lookUpProfile("Kristian", "lastName");
//console.log("HIIIII " + lookUpProfile("Akira", "address")) 