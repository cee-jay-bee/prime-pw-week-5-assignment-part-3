console.log('***** Music Collection *****')
// Create a variable collection that starts as an empty array.
let collection = [];

// Add a function named addToCollection. This function should:
const addToCollection = (title, artist, yearPublished) => {
    // Take in the album's title, artist, yearPublished as input parameters
    // Create a new object having the above properties
    let newObject = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
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
console.log(addToCollection('24K Magic', 'Bruno Mars', 2016));
console.log(addToCollection('Unorthodox Jukebox', 'Bruno Mars', 2012));
console.log(addToCollection('Doo-Wops & Hooligans', 'Bruno Mars', 2010));
console.log(addToCollection('Here\'s to the Good Times', 'Florida-Georgia Line', 2012));
console.log(addToCollection('Anything Goes', 'Florida-Georgia Line', 2014));
console.log(addToCollection('Dig Your Roots', 'Florida-Georgia Line', 2016));

// After all are added, console.log the collection array.
console.log(collection);

// Add a function named showCollection. This function should:
// Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
const showCollection = array => {
    // Console.log the number of items in the array.
    console.log(array.length);
    // Loop over the array and console.log each album's information formatted like: TITLE by ARTIST, published in YEAR.
    for (let i = 0; i < array.length; i++){
        console.log(`${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}`);
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
//as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.
console.log(findByArtist('Bruno Mars'));
console.log(findByArtist('Charlie Daniels Band'));

// Create a function called search. This function should:
// Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
// { artist: 'Ray Charles', year: 1957 }
const search = (object = {}) => {
    let returnedArray = [];
    // If there is no search object or an empty search object provided as input, then return all albums in the collection.
    if (object === {}){
        return collection;
    }
    // Return a new array of all items in the collection matching all of the search criteria.
    // If no results are found, return an empty array.
    for (let i = 0; i < collection.length; i++){
        if (object.artist === collection[i].artist && object.year === collection[i].yearPublished){
            returnedArray.push(collection[i]);
        }
    } return returnedArray;
}

console.log(search({artist: 'Bruno Mars', year: 2016}));
console.log(search());
console.log(search({}));

// Add an array of tracks to your album objects. Each track should have a name and duration. 
// You will need to update the functions to support this new property:

// Update the addToCollection function to also take an input parameter for the array of tracks.
// Update search to allow a trackName search criteria.
// Update the showCollection function to display the list of tracks for each album with its name and duration.