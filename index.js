// Code inspired by this article: https://www.geeksforgeeks.org/node-js-fs-rename-method/

// Import filesystem module
const fs = require('fs');
const directoryWithFilesToRename = 'files-to-rename';

// List all the filenames before renaming
getCurrentFilenames();

// Rename the file
fs.rename(
  `${directoryWithFilesToRename}/hello.txt`,
  `${directoryWithFilesToRename}/world.txt`,
  () => {
    console.log('\nFile Renamed!\n');

    // List all the filenames after renaming
    getCurrentFilenames();
  }
);

// Function to get current filenames
// in directory
function getCurrentFilenames() {
  console.log('Current filenames:');
  fs.readdirSync(directoryWithFilesToRename).forEach((file) => {
    console.log(file);
  });
}
