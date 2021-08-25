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

