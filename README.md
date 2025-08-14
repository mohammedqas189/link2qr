# QR Code Generator

A simple Node.js script that:
- Prompts the user for a URL
- Saves the URL to a text file
- Generates a QR code image for the URL

## How It Works
1. The script asks the user to enter a URL in the terminal.
2. It saves the entered URL into a file called `URL.txt`.
3. It uses the `qr-image` package to generate a QR code image (`qr_img.png`) from the URL.

## Packages Used
<details>
<summary>@inquirer/prompts</summary>
Used to prompt the user for input in the terminal.  
[View on npm](https://www.npmjs.com/package/@inquirer/prompts)
</details>

<details>
<summary>qr-image</summary>
Used to generate the QR code image from the provided URL.  
[View on npm](https://www.npmjs.com/package/qr-image)
</details>

## Installation
```bash
npm install @inquirer/prompts qr-image
