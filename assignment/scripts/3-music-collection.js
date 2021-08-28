console.log('***** Music Collection *****')
// Create a variable collection that starts as an empty array.
let collection = [];

// Add a function named addToCollection. This function should:
// Take in the album's title, artist, yearPublished as input parameters
// Update the addToCollection function to also take an input parameter for the array of tracks.
const addToCollection = (title, artist, yearPublished, tracks) => {
    // Create a new object having the above properties
    let newObject = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: tracks
    }
    // Add the new object to the end of the collection array
    collection.push(newObject);
    // Return the newly created object
    return newObject;
}

// Test the addToCollection function:
// Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. 
// (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
// Console.log each album as added using the returned value.
console.log('Added:', addToCollection('24K Magic', 'Bruno Mars', 2016, [{name: '24K Magic', duration: '3:46'}, {name: 'Perm', duration: '3:30'}, {name: 'That\'s What I Like', duration: '3:26'}]));
console.log('Added:', addToCollection('Unorthodox Jukebox', 'Bruno Mars', 2012, [{name: 'Locked Out Of Heaven', duration: '3:53'}, {name: 'Treasure', duration: '2:58'}, {name: 'Gorilla', duration: '4:04'}]));
console.log('Added:', addToCollection('Doo-Wops & Hooligans', 'Bruno Mars', 2010, [{name: 'Grenade', duration: '3:42'}, {name: 'Marry You', duration: '3:50'}, {name: 'Count On Me', duration: '3:17'}]));
console.log('Added:', addToCollection('Here\'s to the Good Times', 'Florida-Georgia Line', 2012, [{name: 'Cruise', duration: '3:28'}, {name: 'Round Here', duration: '3:35'}, {name: 'Stay', duration: '3:19'}]));
console.log('Added:', addToCollection('Anything Goes', 'Florida-Georgia Line', 2014, [{name: 'Confession', duration: '3:11'}, {name: 'Smile', duration: '2:50'}, {name: 'Angel', duration: '3:31'}]));
console.log('Added:', addToCollection('Dig Your Roots', 'Florida-Georgia Line', 2016, [{name: 'Smooth', duration: '2:49'}, {name: 'May We All', duration: '3:46'}, {name: 'H.O.L.Y.', duration: '3:14'}]));

// After all are added, console.log the collection array.
console.log('My Record Collection:', collection);

// Add a function named showCollection. This function should:
// Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
// Update the showCollection function to display the list of tracks for each album with its name and duration.
const showCollection = array => {
    // Console.log the number of items in the array.
    console.log(array.length);
    // Loop over the array and console.log each album's information formatted like: TITLE by ARTIST, published in YEAR.
    for (let i = 0; i < array.length; i++){
        console.log(`${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}:`);
        // console.table(array[i].tracks);
        for (let j = 0; j < array[i].tracks.length; j++){
            console.log(`${j+1}. ${array[i].tracks[j].name}: ${array[i].tracks[j].duration}`);
            
        }
    }
}
// Test the showCollection function.
showCollection(collection);

// Add a function named findByArtist. This function should:
// Take in artist (a string) parameter
const findByArtist = artist => {
    // Create an array to hold any results, empty to start
    let resultArray = [];
    // Loop through the collection and add any objects with a matching artist to the array.
    for (let i = 0; i < collection.length; i++){
        if (collection[i].artist === artist){
            resultArray.push(collection[i]);
        }
    }
    // Return the array with the matching results. If no results are found, return an empty array.
    return resultArray; 
}

// Test the findByArtist function. Make sure to test with an artist you know is in the collection, 
// as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.
console.log('Here are the albums by Bruno Mars in my collection:', findByArtist('Bruno Mars'));
console.log('Here are the albums by Charlie Daniels Band in my collection:', findByArtist('Charlie Daniels Band'));

// Create a function called search. This function should:
// Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
// { artist: 'Ray Charles', year: 1957 }
// Update search to allow a trackName search criteria.
const search = (object = {}) => {
    let returnedArray = [];
    // If there is no search object or an empty search object provided as input, then return all albums in the collection.
    if (Object.keys(object).length === 0){
        return collection;
    } else if(object.artist && object.year && object.trackName){
        for (let i = 0; i < collection.length; i++){
            if (object.artist === collection[i].artist && object.year === collection[i].yearPublished){
                for (let j = 0; j < collection[i].tracks.length; j++){
                    if (object.trackName === collection[i].tracks[j].name){
                    returnedArray.push([collection[i].artist, collection[i].title, collection[i].yearPublished, collection[i].tracks[j].name]);
                    }
                }
            }
        }
    } else if (object.artist && object.year && !object.trackName) {
        for (let i = 0; i < collection.length; i++){
            if (object.artist === collection[i].artist && object.year === collection[i].yearPublished){
                    returnedArray.push([collection[i].artist, collection[i].title, collection[i].yearPublished, collection[i].tracks]);
            }
        }
    } else if (object.artist && !object.year && object.trackName) {
        for (let i = 0; i < collection.length; i++){
            if (object.artist === collection[i].artist){
                for (let j = 0; j < collection[i].tracks.length; j++){
                    if (object.trackName === collection[i].tracks[j].name){
                    returnedArray.push([collection[i].artist, collection[i].title, collection[i].yearPublished, collection[i].tracks[j].name]);
                    }
                }
            }
        }
    } else if (!object.artist && object.year && object.trackName) {
        for (let i = 0; i < collection.length; i++){
            if (object.year === collection[i].yearPublished){
                for (let j = 0; j < collection[i].tracks.length; j++){
                    if (object.trackName === collection[i].tracks[j].name){
                    returnedArray.push([collection[i].artist, collection[i].title, collection[i].yearPublished, collection[i].tracks[j].name]);
                    }
                }
            }
        }
    } else if (object.artist && !object.year && !object.trackName) {
        for (let i = 0; i < collection.length; i++){
            if (object.artist === collection[i].artist){
                returnedArray.push([collection[i].artist, collection[i].title, collection[i].yearPublished, collection[i].tracks]);
            }
        }
    } else if (!object.artist && object.year && !object.trackName) {
        for (let i = 0; i < collection.length; i++){
            if (object.year === collection[i].yearPublished){
                returnedArray.push([collection[i].artist, collection[i].title, collection[i].yearPublished, collection[i].tracks]);
            }
        }
    } else if(!object.artist && !object.year && object.trackName){
        for (let i = 0; i < collection.length; i++){
                for (let j = 0; j < collection[i].tracks.length; j++){
                    if (object.trackName === collection[i].tracks[j].name){
                    returnedArray.push([collection[i].artist, collection[i].title, collection[i].yearPublished, collection[i].tracks[j].name]);
                    }
                }
            }
        }
    // Return a new array of all items in the collection matching all of the search criteria.
    // If no results are found, return an empty array.
    return returnedArray;
}

console.log('Search for "Florida-Georgia Line, 2016, Smooth":', search({artist: 'Florida-Georgia Line', year: 2016, trackName: 'Smooth'}));
console.log('Search for "Bruno Mars, 2016":', search({artist: 'Bruno Mars', year: 2016}));
console.log('Search for "Florida-Georgia Line, Angel":', search({artist: 'Florida-Georgia Line', trackName: 'Angel'}));
console.log('Search for "2010, Count On Me":', search({year: 2010, trackName: 'Count On Me'}));
console.log('Search for "Florida-Georgia Line:', search({artist: 'Florida-Georgia Line'}));
console.log('Search for "2016":', search({year: 2016}));
console.log('Search for "Perm":', search({trackName: 'Perm'}));
console.log('Empty Search:', search());
console.log('Empty Object Search:', search({}));






