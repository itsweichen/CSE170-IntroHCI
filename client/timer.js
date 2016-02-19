var timerIntervel = 20000; // init to 20s
var count = 0;

setInterval(createMatch, timerIntervel);

function createMatch()
{
	count += 1;
  	if (count < 2) { // just fire one time for now
  		console.log("Timer Interrupt." + "count: " + count + " timerIntervel:" + timerIntervel);

  		// match two meal, create an event and add it to db

  		/*

		Events.insert({
            image1: imageUrl,
            name1: name,
            time1: time,
            location1: location,
            user1: loggedInUserId,

            image2: imageUrl,
            name2: name,
            time2: time,
            location2: location,
            user2: loggedInUserId,

            status: 1// 1: waiting to drop; 2: Find your meal; 3: Waiting for other to drop; 4: Finished

		});

  		*/
  	}
}