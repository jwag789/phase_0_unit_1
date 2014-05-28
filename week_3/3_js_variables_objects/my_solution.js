// I paired [by myself, with:] on this challenge.

// By Myself
// Write your code below.
var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = ["John", "Eddard", "Daenerys", "Mary"];





// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// I thought that this was a good excercise to go through to understand Test Driven Development.
// Test Driven Development is a technique that always helps me. It will typically tell you the error
// that is happening if there is one, and it is a good way to fix through bugs to solve a problem.
// I've worked with TDD's before and they have always been helpful. It's very interesting working
// "backwards" and it helped me figure out some things. I did not face any problems in this
// excercise or have many questions, since the coding in question was rather simple. The concept of 
// TDD was once new to me though but is now solidified in my head. I enjoyed doing all of this and
// nothing was tedious, because I thought it was a great way to dive into TDD.

// __________________________________________
// Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

