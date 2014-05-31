// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. 
//  2.


// 0. "YOU SIGNED... WHO?!"
var hash1 = {
    name: "Mr. Client",
    age: 50,
    quote: "Hello!"
    }

// 1. "Here they Come!"

var hash1 = {
    name: "Adam Sandler",
    age: 47,
    quote: "That's your home! Are you too good for your home?"
    }
    
var hash2 = {
    name: "Kristen Bell",
    age: 33,
    quote: "Do you want to build a snowman?"
    }
    
var hash3 = {
    name: "Jim Carrey",
    age: 52,
    quote: ".. So you're telling me there's a chance? YEAH!"
    }

// 2. "TIME IS MONEY!"

//YOUR CODE HERE!

function Client(name, age, quote){
    this.name = name;
    this.age = age;
    this.quote = quote;
}

var adamSandler = new Client("Adam Sandler", 47, "That's your home! Are you too good for your home?");

var kristenBell = new Client("Kristen Bell", 33, "Do you want to build a snowman?");

var jimCarrey = new Client("Jim Carrey", 52, ".. So you're telling me there's a chance? YEAH!");





// 3. "SHOW 'EM OFF!"

for(var i=0; i <= clients.length; i++) {
    console.log("Our awesome client is " + clients[i].name + " who is " + clients[i].age + " years old. And their favorite quote is " + clients[i].quote)
}

// 4. "But wait, there's more!"

function Client(name, age, quote){
    this.name = name;
    this.age = age;
    this.quote = quote;
    this.showQuote = function() {
    	console.log(quote);
    }
}

// 5.  ** BONUS **


//  6.  Your Reflection:

// This was enjoyable challenge to work on. It definitely cleared up some thing
// that I wasn't sure about. Working with Irene on this was nice, as we both had
// many of the same questions. We both worked with each other to look up different
// syntax for solutions that we agreed upon, and we were able to work through the
// problems pretty well after a few reminders and a few revelations. Simple problems
// we had like forgetting to put parenthesis after a function made me remember
// to do that from now on. It was definitely a good learning experience.