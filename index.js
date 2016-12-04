var express = require('express');
var request = require('request');
var app = express();
var cors = require('cors');
var Yelp = require('yelp');

app.use(cors()); //allows overriding cross origin policy (use npm install if needed)

app.get('/test', function(req, res){ // listens for request on /api route
 console.log('working!');
 res.send('working!'); // if no errors, send the body of data back to front end
});

/* PUT YOUR CODE BETWEEN COMMENTS */

app.get('/phone', function(req, res){ // listens for request on /api route
 console.log('test api!');
 // res.send('working api!');

var yelp = new Yelp({
  consumer_key: '-5M9jfXB_KlLZSry7N0y7g',
  consumer_secret: '-CsnsEpO-AIvCUgJkzzMFxz4n7U',
  token: 'XVoJD8K_7G7HFLBBEZswvl1u3idr7Ete',
  token_secret: '3O88cZubxXw_0FqMW4zLsSqCZFU',
});

var phone = req.query.phone;

yelp
  .phoneSearch({phone: phone})
  .then(function(data){
    res.send(data);
  }).catch(console.error);
});


var port = process.env.PORT || 3000;
app.listen(port);
console.log('Server running on port 3000');


/* BreweryDB API Example */

// app.get('/api', function(req, res){ // listens for request on /api route
//   var lat = req.query.lat; // grabs lat and lng queries from the request object
//   var lng = req.query.lng;
//   request('https://api.brewerydb.com/v2/search/geo/point?lat=' + lat + '&lng=' + lng + '&type=beer&hasImages=Y&key=72a751214ab8b53056ac0a6d8376dc2d', function (error, response, body) { // api url
//     if (!error && response.statusCode === 200) {
//       console.log('beer');
//       res.send(body); // if no errors, send the body of data back to front end
//     }
//    });
// });
