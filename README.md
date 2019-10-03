# Setting Up The Application
1. Navigate to where the cloned files are. 
2. Run the following in the terminal or console:
``` console
npm install
```
3. This will install all the necessary packages needed to run the application.
4. Next, you will need to add a couple of files. 
5. Add these files:
```console
.env
```
``` Console
keys.js
```
6. The .env file will hold the keys needed to access the spotify ID and Secret.
7. Inside the .env file, type the following:
```.env
SPOTIFY_ID=yourKeyHere
SPOTIFY_SECRET=yourKeyHere
```
8. Inside the keys.js file fill in the following: 
``` javascript
exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
```
9. Once you have added those files. You can now test the file. 

# Using The Application
1. The app uses paramaters to function inside of Node. 
2. You run the application by typing the following in your terminal or console: 
``` console
node liri.js Parameter-1 Parameter-2
```
3. Your search terms are the following:

| Parameter 1  | Parameter 2 | Full Example |
| :------:  |:---:| :----:|
| spotify-this-song| Search Keyword | `spotify-this-song 'What About Now'` |
| movie-this | Search Keyword | `movie-this 'Deadpool'` |
| concert-this | Search Keyword | `concert-this 'Kane Brown'`|
| do-what-it-says | No Search Keyword for this operation | `do-what-it-says`|

4. A completed example of using the paramaters needed
``` console
node liri.js spotify-this-song 'What About Night'
```
or for the ones that do not use Paramater 2, do the following: 
``` console
node liri.js do-what-it-says
```