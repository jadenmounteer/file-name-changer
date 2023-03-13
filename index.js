// Code inspired by this article: https://www.geeksforgeeks.org/node-js-fs-rename-method/

// Import filesystem module
const fs = require('fs');
const directoryWithFilesToRename = 'files-to-rename';
const textToRemoveFromFileName = '-removebg-preview';
const fileExtension = '.png';

// List all the filenames before renaming
const filesToRename = getCurrentFilenames();
console.log(filesToRename);

// Rename the files
filesToRename.forEach((file) => {
  const indexOfTextToRemove = file.indexOf(textToRemoveFromFileName);

  const newFileName = file.slice(0, indexOfTextToRemove) + fileExtension;
  console.log(newFileName);

  fs.rename(
    `${directoryWithFilesToRename}/${file}`,
    `renamed-files/${newFileName}`,
    () => {
      console.log(`Renamed ${file} to be ${newFileName}`);
    }
  );
});
console.log('Finished! Have a nice day!');

// Function to get current filenames
// in directory
function getCurrentFilenames() {
  let filesToRename = [];
  fs.readdirSync(directoryWithFilesToRename).forEach((file) => {
    filesToRename.push(file);
  });
  return filesToRename;
}
