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
	var destination = prompt("Where would you like to move, " + euron.status + " Euron? Type left, right, up, or down.\n Mountains: 4,4 \n Podium: 2,4 \n Cragorn: 2,2").toLowerCase();
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
		alert("As Cragorn falls to his death from the horn made of Dragon's scales, everyone cheers with hope that you will bring them Dragons, and power.");
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

function gameOn(){
euron.status = "Captain";
euron.pos = {x:1,y:1};
euron.bag = null;
cragorn.status = "Happily Alive";
cragorn.bag = null;
alert("The time is near to elect the new king. You must convince everyone by finding the deadly Dragon Horn.\nTry heading to the mountains.");
stats();
while (euron.status && cragorn.status){
play();
}
alert("Thank you for playing!");
}
