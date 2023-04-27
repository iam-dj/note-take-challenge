# note-take-challenge

![GitHub license](https://img.shields.io/badge/licens-MIT-black.svg)

## Description

The note taking application is a web-based tool that simplifies the process of creating, organizing, and storing notes. Users can easily create new notes with a title and a body of text, search for and sort notes based on various criteria, and categorize them as needed. The application stores notes in a database for easy access from any device or location, and offers features such as backup and restore options, note sharing, and setting reminders. The application is ideal for students, professionals, or anyone who needs a quick and convenient way to stay organized and keep track of important information.

## Table of Contents (Optional)


- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

Load terminal then follow these commands: 

npm init -y

npm install express

npm install UUID

Once install type the command: 

node index.js or nodemon index.js

## Usage

use the url http://localhost:3000/ or head to Heroku: to go to the homepage and type your note and hit the save icon to save it to the database. 

You can also manipuate the server via Insomnia by going to the localhost address above and creating and DELETE and POST. If you enter the delete you'd need to enter the ID of the item you'd like to delete. If you POST you'd need to create a body that has the ID and NOTE.


## Credits

Node Packet: [NPMJS](https://www.npmjs.com/)

License: [Shield.io] (https://shields.io/category/license)

## License

MIT License
Copyright (c) 2023 DJ (AKA - iam-dj or Dexter Jules)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
