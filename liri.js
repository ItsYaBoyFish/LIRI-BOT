require('dotenv').config();
const Spotify = require('node-spotify-api');
const axios = require('axios');
const moment = require('moment');
var keys = require('./keys.js');

var spotify = new Spotify(keys.spotify);


switch (process.argv[2]) {
  case 'spotify-this-song': 
    searchSpotify(process.argv[3]);
    break;
  case 'movie-this':

    break;
  case 'concert-this':

    break;
  case 'do-what-it-says':

    break;
}










function searchSpotify(userInput) {

  spotify.search({type: 'track', query: userInput}, function(err, data) {
    if (err) {
      // console.log(err);
      console.log('That particular song could not be found. Please enter a valid song.');
    } else {
      // console.log(data.tracks.items[0].album.name);
      var spotifyData = {
        Artist: data.tracks.items[0].album.artists[0].name,
        Song: data.tracks.items[0].name,
        Link: data.tracks.items[0].external_urls.spotify,
        Album: data.tracks.items[0].album.name
      }
      console.log(spotifyData);
    }
  });
};

function searchConcerts() {
  axios('https://rest.bandsintown.com/artists/Daughtry/events?app_id=codingbootcamp').then(function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data.data.venue.name);
      // var data = {
      //   Venue: data.venue.name
      // }
    }
  });
}




searchConcerts()
