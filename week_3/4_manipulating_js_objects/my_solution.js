
// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}



// __________________________________________
// Write your code below.

// make a new empty object, adam
// give adam object name property
// give terah object spouse property of object adam
// change the terah object weight property
// delete the terah objects eyeColor property
// give adam spouse property of object terah
// give terah children property of an empty object
// add object named carson with name property to the children object in the terah object
// add object named carter with name property to the children object in the terah object
// add object named colton with name property to the children object in the terah object
// give adam children property equal to terah's children property

var adam = {};
adam.name = "Adam";
terah.spouse = adam;
terah.weight = 125;
delete terah.eyeColor;
adam.spouse = terah;
terah.children = {};
terah.children.carson = {name: "Carson"};
terah.children.carter = {name: "Carter"};
 terah.children.colton = {name: "Colton"};
adam.children = terah.children

// __________________________________________
// Reflection: Use the reflection guidelines
// 
// This was a nice challenge to complete. To me, I didn't really have many problems, but
// it was good to work through. Most of it was very intuitive to me, but the only thing I
// wasn't sure about was how to delete a property. I tried a few different things and figured
// the keyword delete would work, especially when it changed colors, which is always helpful.
// The concept of an object in Javascript becomes more and more solidified as I work through
// these challenges. I can definitely define local variables, create/add/delete properties,
// access values, and use test driven development. I enjoyed working through this challenge just
// to see the changes I would make to the objects, and how objects can interact and take from each
// other. Writing psuedo code is still somewhat strange to me, but I can see the benefits.

// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)