// I worked on this challenge [by myself, with:]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
// Level 1 - Rescue Mission

// move down x 2
// move right
// move up x 2
// move right x 2
// move down
// Attack!

this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

// Level 2 - Grab the Mushroom

// move up
// move right
// move left
// move up
// Attack!

this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();

this.attackNearbyEnemy();

// Level 3 - Drink Me

// Attack!
// move right
// move down
// move up
// move right
// Attack!

this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

// Level 4 - Taunt the Guards

// move right
// bust door

// move right
// say hey (taunt)
// move left x 2
// say attack

// move right
// say follow
// move right x 2
// move up
// move right
// say hey (taunt)
// move down
// move right
// move up
// move right

this.moveRight();
this.bustDownDoor();

this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Hey there!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

// Level 5 - It's a Trap

// move down x 2
// say hey (taunt)
// move up x 2

this.moveDown();
this.moveDown();
this.say("Hello there Ogre!");
this.moveUp();
this.moveUp();

// Level 6 - Break the Prison

// if william, true
// if krogg, false
// if lucas, true
// if brack or gort, false
// if robert or marcus, true
// if grul'thock, false
// if gordon, true

if(name === "William")
    return true;
if(name === "Krogg")
    return false;
if(name === "Lucas")
    return true;
if(name === "Brack" || name  === "Gort")
    return false;
if(name === "Robert" || name == "Marcus")
    return true;
if(name === "Grul'Thock")
    return false;
if(name === "Gordon")
    return true;

// Level 7 - Taunt

// say hey (taunt)
// say more (taunt) x 3

this.say("Hey!");
this.say("Ogre, I'm talking to you!");
this.say("That's right, lughead! You!");
this.say("YOU!!!");

// Level 8 - Cowardly Taunt

// move to (50,16)
// move to (63,20)
// move to (70,10) (hiding)
// say (I can lure them here)

// move (60,42)

// say hey (taunt)

// move to (70,10) (hiding)

this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);
this.say("I can lure them in here.");

this.moveXY(60, 42);

this.say("Hey y'all.")

this.moveXY(70, 10);

// Level 9 - Commanding Followers

// move to (49,66)
// move to (60,63)
// move to (75,63)
// say message to friends, "follow"
// move to (61,41)
// say message to friends, "attack"

this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");
this.say("Follow me, troops!");
this.moveXY(61, 41);
this.say("On my mark... 1...2...3...ATTACK!");

// Level 10 - Mobile Artillery

// move to (30,26) (close to ogres)
// attack (46,5)

// move to (54,37) (close to other ogres)
// attack (48,66) (ogres and big ogre hit 1)
// attack (53,51) (big ogre hit 2)
// attack (67,55) (ogres and big ogre hit 1)
// attack (59,44) (big ogre hit 2)

this.moveXY(30, 26);
this.attackXY(46, 5);

this.moveXY(54, 37);
this.attackXY(48,66);
this.attackXY(53,51);
this.attackXY(67,55);
this.attackXY(59,44);

// Release 3 - Answer the following questions

// What is "this" referring to?

//The keyword "this" in Javascript is essentially referring to the owner of the function that is being executed. Or for example, if you set a variable to something, and call "this" on the variable in a function, it will return the value of the variable.

// What does the "()" do in JavaScript?

// The parenthesis in JavaScript are used at the end of a function name, because it allows for the entry of a parameter. It may be left empty if your function does not require a parameter, but is still necessary syntax.

// The semicolons in JavaScript are used to seperate different statements. If the statement is followed by a line break, it can be omitted, but it is useful for seperating statements on the same line.


// Reflection:
// Write your reflection here.

// This was an interesting activity to complete. I love video games so that resonated
// with me. It was also useful to sort of see how functions can play out in a visual sense,
// and it was definitely useful to practice writing in psuedocode and then translating
// it to code. Other than that I thought that this excercise was a little too simple even,
// as I felt the psuedocode I was writing was exactly the same as the real code, and
// other than writing in psuedocode, not much was being really taught. The excercises
// pretty much consisted of moving around a couple of function calls. I definitely enjoyed
// reading through each of the functions and how they worked however, and it gave me a good
// sense of how "this" is used, and a few other syntax points. A good resource for this section
// that I found was: http://www.codecademy.com/blog/78-your-guide-to-semicolons-in-javascript