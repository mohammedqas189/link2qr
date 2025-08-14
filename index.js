/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import { input } from '@inquirer/prompts'; 
import { writeFile } from 'fs';

const url = await input( {message: 'Enter your URL: '} ); 

writeFile('URL.txt', url, (err) => {
    if (err) throw err;
    console.log("Added User's URL");
});

