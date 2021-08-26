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

// Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
// Console.log each album as added using the returned value.
console.log(addToCollection('24K Magic', 'Bruno Mars', '2016'));
console.log(addToCollection('Unorthodox Jukebox', 'Bruno Mars', '2012'));
console.log(addToCollection('Doo-Wops & Hooligans', 'Bruno Mars', '2010'));
console.log(addToCollection('Here\'s to the Good Times', 'Florida-Georgia Line', '2012' ));
console.log(addToCollection('Anything Goes', 'Florida-Georgia Line', '2014'));
console.log(addToCollection('Dig Your Roots', 'Florida-Georgia Line', '2016'));

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