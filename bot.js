console.log("Bot is starting ...");
var Twit = require('twit')
var config = require("./config");
 
var T = new Twit(config);

var twit_this = {
    status :'hello worl my first twit from the bot !! '
}
// An inbuilt method to post the twit in your twitter account
T.post('statuses/update',twit_this, processed);

function processed ( err, data, response ) {
 console.log("Success fully posted the twit");
}

var x = { 
    q: 'nice since:2011-07-11', 
count: 1 
}

// get the tweets based on the filtered criteria
T.get('search/tweets',x, processIt)

function processIt ( err, data, response) {
    console.log("Here is the data coming back from the twitter " + JSON.stringify(data));
    //console.log("Response : " + JSON.stringify(response))

}

