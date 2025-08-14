/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import { input } from '@inquirer/prompts';
import { writeFile, createWriteStream  } from 'fs';
import qr  from 'qr-image'

const url = await input( {message: 'Enter your URL: '} ); 


const qr_svg = qr.image(url, {
    type: 'png',
    ec_level: 'H',
    size: 8,
    margin: 2,
    parse_url: true
}); 

qr_svg.pipe(createWriteStream('qr_img.png'));

writeFile('URL.txt', url, (err) => {
    if (err) throw err;
    console.log("Added User's URL");
});

