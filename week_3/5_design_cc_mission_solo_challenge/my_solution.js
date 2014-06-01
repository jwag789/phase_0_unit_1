// This is a solo challenge

// Your mission description:
// 
// The king has died mysteriously, and with various claims to the throne,
// the people decide to hold an election on who should be the next king. 
// As you were the king's younger brother, it's between you, you're younger
// brother, and your niece, along with a few other high lords. You know what
// you need to rally everyone to your side - the legendary Dragon Horn, which
// has the power to tame dragons and bring your people to greatness. But when
// you take the podium, do not blow the horn yourself! Ask your troop, Cragorn
// to blow it for you, for whoever blows this horn dies. But then, the throne is yours...

// Pseudocode
// 
// make Euron object
// give Euron position of (1,1)
// give Euron bag, start as null(false) value
// make Cragorn object
// give Cragorn position of (2,2)
// give Cragorn bag, start as null(false) value
// make Dragon Horn object
// give Dragon Horn position of (4,4)
// make podium object
// give podium position of (2,9)
// make "move" function
// prompts user for direction, changes coordinates
// make "take" function
// takes Dragon Horn if player is in same position as it
// change bag object to array with Dragon Horn
// change your status to Horn Holder
// make "give" function
// gives Dragon Horn if player is in same position as Cragorn
// your bag object becomes null again, and cragorns bag object becomes an array with Dragon Horn
// make "blowHorn" function
// blows horn if player is at same position as podium, and either player or Cragorn has bag object
// player loses if you hold the horn (bag object), wins if Cragorn holds the horn (bag object)
// delete status of whoever blows the horn, ending the game
// change your status to "King" if you win
// make function to keep game going until you win or lose

// Initial Code

var euron = {};

euron.pos = {};
euron.pos.x = 1;
euron.pos.y = 1;
euron.bag = [];
euron.status = "Captain"

var dragonHorn = {};
dragonHorn.pos = {};
dragonHorn.pos.x = 4;
dragonHorn.pos.y = 4;

var podium = {};
podium.pos = {};
podium.pos.x = 2;
podium.pos.y = 4;


var cragorn = {};
cragorn.pos = {};
cragorn.pos.x = 2;
cragorn.pos.y = 2;
cragorn.bag = [];

function move(){
	var destination = prompt("Where would you like to move, " + euron.status + " Euron?. Type left, right, up, or down.\n Dragon Horn: 4,4 \n Podium: 2,4 \n Cragorn: 2,2");
	if (destination.toLowerCase() === "left"){
		if (euron.pos.x<2){
		alert("That is not a valid movement!")
		}
		else{
			euron.pos.x -= 1;
		}
	}
	else if (destination.toLowerCase() === "right"){
		if (euron.pos.x > 3){
		alert("That is not a valid movement!")
		}
		else{
			euron.pos.x += 1;
		}
	}
	else if (destination.toLowerCase() === "up"){
		if (euron.pos.y > 3){
		alert("That is not a valid movement!")
		}
		else{
			euron.pos.y += 1;
		}
	}
	else if (destination.toLowerCase() === "down"){
		if (euron.pos.y < 2){
		alert("That is not a valid movement!")
		}
		else{
			euron.pos.y -= 1;
		}
	}

}

function take(){
	if (euron.pos.x === dragonHorn.pos.x && euron.pos.y === dragonHorn.pos.y){
		euron.bag[0] = dragonHorn;
		euron.status = "Horn Holder"
		alert(euron.status + " Euron: I've got the horn! Time to become King.");
		alert("Remember to be careful. Blowing that horn yourself could be deadly. \nHead to the podium to blow the horn, or to Cragorn to give it to him.")
	}
	else{
		if (euron.bag[0] === dragonHorn || cragorn.bag[0] === dragonHorn){ 
		alert("You already have the horn!")
		}
		else{
			alert("Nothing to take here!")
		}
	};
};

function give(){
	if (euron.pos.x === cragorn.pos.x && euron.pos.y === cragorn.pos.y && euron.bag[0] === dragonHorn){
		alert("Euron: Here, my faithful friend, Cragorn! Please blow this mystical horn, and usher in a new era!");
		euron.bag = [];
		cragorn.bag[0] = dragonHorn;

	}
	else if(cragorn.bag[0] === dragonHorn){
		alert("You already gave the Dragon Horn to Cragorn! Head to the podium!")
	}
	else{	alert("You need to bring the Dragon Horn to Cragorn to give it away.")
	}
};

function blowHorn(){
	if (euron.pos.x === podium.pos.x && euron.pos.y === podium.pos.y && euron.bag[0] === dragonHorn){
		alert("Euron: Oh no! My lungs... They're... turning black...");
		delete euron.status
		alert("The end.");
		
	}
	else if (euron.pos.x === podium.pos.x && euron.pos.y === podium.pos.y && cragorn.bag[0] === dragonHorn){
		alert("The horn is blown and sounds like the screaming of a thousand souls.");
		alert("People stand in amazement as they realize the power you have found.");
		alert("As Cragorn falls to his death from the horn made of Dragon's scales, \neveryone cheers with hope that you will bring them Dragons, and power.");
		alert("They no longer seem interested in the other claimants, and begin to shout Euron, Euron, KING EURON!");
		euron.status = "King";
		
	}
	else{
		if (euron.bag[0] === dragonHorn || cragorn.bag[0] === dragonHorn){
		alert("Go to the podium once you are ready.")
		}
		else{
		alert("You still need to find that horn!");}
	}
};


function play(){
var action = window.prompt("What would you like to do, " + euron.status + " Euron? \n Move \n Take \n Give \n Blow Horn");
if (action.toLowerCase() === "move"){
	move();
	alert(euron.status + " Euron.\nPosition:" + euron.pos.x + ", " + euron.pos.y)
}
else if (action.toLowerCase() === "take"){
	take();
	alert(euron.status + " Euron.\nPosition:" + euron.pos.x + ", " + euron.pos.y)

}
else if (action.toLowerCase() === "give"){
	give();
	alert(euron.status + " Euron.\nPosition:" + euron.pos.x + ", " + euron.pos.y)

}
else if (action.toLowerCase() === "blow horn"){
	blowHorn();
	if (euron.status){
	alert(euron.status + " Euron.\nPosition:" + euron.pos.x + ", " + euron.pos.y)	
	}

}
}
alert("The time is near to elect the new king. You must convince everyone by finding the deadly Dragon Horn.")
alert(euron.status + " Euron.\nPosition:" + euron.pos.x + ", " + euron.pos.y)
while (euron.status && euron.status != "King"){
play();
}
alert("Thank you for playing!");

// Refactored Code

function Person(pos, bag, status){
	this.pos = pos;
	this.bag = bag;
	this.status = status;
};
function Thing(pos){
	this.pos = pos;
};

var euron = new Person({x:1,y:1}, null, "Captain");
var cragorn = new Person({x:2,y:2}, null, "Happily Alive");

var dragonHorn = new Thing({x:4,y:4});
var podium = new Thing({x:2,y:4});

function move(){
	var destination = prompt("Where would you like to move, " + euron.status + " Euron?. Type left, right, up, or down.\n Mountains: 4,4 \n Podium: 2,4 \n Cragorn: 2,2").toLowerCase();
	if (destination === "left"){
		if (euron.pos.x<2){alert("Where do you think you're going?")}
		else{euron.pos.x -= 1;}
	}
	else if (destination === "right"){
		if (euron.pos.x > 3){alert("No more world to explore in this direction...")}
		else{euron.pos.x += 1;}
	}
	else if (destination === "up"){
		if (euron.pos.y > 3){alert("Are you sure? It's very cold up there...")}
		else{euron.pos.y += 1;}
	}
	else if (destination === "down"){
		if (euron.pos.y < 2){alert("Let's...not go this way.")}
		else{euron.pos.y -= 1;}
	};
};

function take(){
	if (euron.pos.x === dragonHorn.pos.x && euron.pos.y === dragonHorn.pos.y){
		euron.bag = [dragonHorn];
		euron.status = "Horn Holder";
		alert("Horn Holder Euron: I've got the horn! Time to become King.");
		alert("Remember to be careful. Blowing that horn yourself could be deadly. Head to the podium to blow the horn, or to Cragorn to give it to him.");
	}
	else{
		if (euron.bag || cragorn.bag){ 
		alert("You already have the horn!")
		}
		else{
			alert("Nothing to take here!")
		}
	};
};

function give(){
	if (euron.pos.x === cragorn.pos.x && euron.pos.y === cragorn.pos.y && euron.bag){
		alert("Euron: Here, my faithful friend, Cragorn! Please blow this mystical horn, and usher in a new era!\nGo to the podium!");
		euron.bag = null;
		cragorn.bag = [dragonHorn];

	}
	else if(cragorn.bag){
		alert("You already gave the Dragon Horn to Cragorn! Head to the podium!");
	}
	else{	alert("You need to bring the Dragon Horn to Cragorn to give it away.");
	}
};

function blowHorn(){
	if (euron.pos.x === podium.pos.x && euron.pos.y === podium.pos.y && euron.bag){
		alert("Euron: Oh no! My lungs... They're... turning black...");
		delete euron.status;
		alert("The end.");
	}
	else if (euron.pos.x === podium.pos.x && euron.pos.y === podium.pos.y && cragorn.bag){
		alert("The horn is blown and sounds like the screaming of a thousand souls.");
		alert("People stand in amazement as they realize the power you have found.");
		alert("As Cragorn falls to his death from the horn made of Dragon's scales, \neveryone cheers with hope that you will bring them Dragons, and power.");
		alert("They no longer seem interested in the other claimants, and begin to shout Euron, Euron, KING EURON!");
		delete cragorn.status;
		euron.status = "King";
		
	}
	else{
		if (euron.bag || cragorn.bag){
		alert("Go to the podium once you are ready.");}
		else{
		alert("You still need to find that horn! Try searching in the mountains.");}
	}
};

function stats(){alert(euron.status + " Euron.\nPosition:" + euron.pos.x + ", " + euron.pos.y)};
function play(){
var action = prompt("What would you like to do, " + euron.status + " Euron? \n Move \n Take \n Give \n Blow Horn");
if (action.toLowerCase() === "move"){
	move();stats();
}
else if (action.toLowerCase() === "take"){
	take();stats();

}
else if (action.toLowerCase() === "give"){
	give();stats();
}
else if (action.toLowerCase() === "blow horn"){
	blowHorn();
	if (euron.status){stats();}
}
}
alert("The time is near to elect the new king. You must convince everyone by finding the deadly Dragon Horn.\nTry heading to the mountains.");
stats();
while (euron.status && cragorn.status){
play();
}
alert("Thank you for playing!");

// Reflection
//
// What parts of your strategy worked? What problems did you face?

// By the end of working through this, most of my strategy had worked. I originally had the player type in coordinates instead of moving in 
// a direction, but the way I went about it felt messy. I had refreshed myself on JSON parsing to change the numbers someone would type in 
// into an array, and used NaN to find if the user typed in a space or special character, but if the user typed in a letter, the program 
// would receive and error.

// What questions did you have while coding? What resources did you find to help you answer them?

// I was having trouble trying to compare two different objects positions, but I figured out I could match both the x and y coordinates seperately.
// The Javascript Intro was really helpful for a lot of my problems. I read about JSON parsing at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
// 
// What concepts are you having trouble with, or did you just figure something out? If so, what?

// I originally didn't create objects using a function, but I realized I should do it while refactoring. I can definitely see how helpful
// that can be. I also originally planned on simply logging most things to the console, but since my strategy involved user input via prompts,
// I ended up using alerts for everything else. This however worked out well for what I was trying to do. However, I could not test this using
// node; only using the browser console. In the terminal it would say Reference Error: prompt is not defined. I wasn't sure if there was a way
// around this, but it's something I want to look into.

// Did you learn any new skills or tricks

// Most of these concepts I've read about lately, but it was helpful to me using something that equals true as a condition, dropping the " === true",
// for example, while(euron.status && cragon.status). Once I delete the status property from one of them, the loop will end.
// 
// How confident are you with each of the Learning Competencies?

// I am confident in all of the learning competencies besides the bonus, which is something that interests me.

// Which parts of the challenge did you enjoy?

// I had fun with most of this challenge after I started getting into it. It was nice to be able to test my code using the browser console, and it was
// pretty exciting when I figured out a problem and saw my code work. The fact that it was so open ended was intimidating to me at first but I began
// to have fun with it, using a scenario based on some favorite books and mixing in my love for video games.

// Which parts of the challenge did you find tedious?

// Although testing my code was nice, it was definitely tedious when I had to go deep into the game to test something several times. It ended up taking
// much longer just testing it over and over again. Also, I enjoyed tackling the challenge of changing most alerts based on your status and whether you
// got the item yet, dropped it of yet, but I felt like I had more if/else if/else loops than necessary, and I started to feel like too much time and code
// was being spent on changing text, when I mostly just wanted to see a result of changing around properties of an object. This was a fun challenge, however
// I think I started going too far as I tried to reach my original goals, and there are probably better solutions, but I'm excited to learn more.