// stating file location over here as in future, modifying one file path instead of over the whole program
const read = './customer-data.csv'
const file = 'customer-data.json'

// declaring the dependencies needed for the project
const converter = require("csvtojson");
const fs = require('fs');
const path = require('path');

// calling the function, separating process into error (if fail) and result (if success)
converter().fromFile(read, (error, result) => {
    if(error) {
        // Display the error if reading from file is not successfu;
        console.log(`Error occured: ${error.message}`)
    } else {
        // writing the data into the file stated and notifying the status of process
        fs.writeFileSync(path.join(__dirname, file), result)
        console.log('Done converting');
    }
    // there should be a statement to notify if converting is not successful, but I do not know how to build it. I am still new
})