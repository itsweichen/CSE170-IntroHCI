var timerIntervel = 20000; // init to 20s
var count = 0;

setInterval(createMatch, timerIntervel);

function createMatch()
{
	count += 1;
  	if (count < 2) { // just fire one time for now
  		console.log("Timer Interrupt." + "count: " + count + " timerIntervel:" + timerIntervel);

  		// match two meal, create an event and add it to db
  	}
}