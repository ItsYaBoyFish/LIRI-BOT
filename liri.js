require('dotenv').config();
const fs = require('fs');
const Spotify = require('node-spotify-api');
const axios = require('axios');
const moment = require('moment');
var keys = require('./keys.js');

var spotify = new Spotify(keys.spotify);


switch (process.argv[2]) {
  case 'spotify-this-song':
    var defaultTitle = 'The Sign';
    if (process.argv[3] === null) {
      searchSpotify(defaultTitle);
    } else {
      searchSpotify(process.argv[3]);
    }
    break;
  case 'movie-this':
    searchMovies(process.argv[3]);
    break;
  case 'concert-this':
    searchConcerts(process.argv[3]);
    break;
  case 'do-what-it-says':
    doWhatItSays();
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

function searchConcerts(userInput) {
  axios(`https://rest.bandsintown.com/artists/${userInput}/events?app_id=codingbootcamp`).then(function(data) {
      var state = data.data[0].venue.region;
      var city = data.data[0].venue.city;
      var eventDate = data.data[0].datetime;
      var eventData = {
        Venue: data.data[0].venue.name,
        Location: `${city}, ${state}`,
        Date: moment(eventDate).format('MM/DD/YYYY')
      }
      console.log(eventData);
  });
}


function searchMovies(userInput) {
  axios(`http://www.omdbapi.com/?apikey=trilogy&t=${userInput}`)
  .then(function(results, err) {
    if (err) {
      console.log(err);
    } else {
      // console.log(results.data);
      var movieData = {
        Title: results.data.Title,
        ReleaseYear: results.data.Year,
        Rating: results.data.Rated,
        RottenTomatosRating: results.data.Ratings[1].Value,
        CountryOfProduction: results.data.Country,
        LanguageOfTheMovie: results.data.Language,
        PlotOfTheMovie: results.data.Plot,
        ActorsInTheMovie: results.data.Actors.split(',')
      }
      console.log(movieData);
    }
  });
}

function doWhatItSays() {
fs.readFile('random.txt', 'utf8', function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      var newDataArray = data.split(',');
      searchSpotify(newDataArray[1]);
      
    }
  })
}