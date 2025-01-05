import fs from 'fs';

fs.appendFile('data/message.txt', "This message was generated using Node.js\n", (error) => {
    if(error) throw error;

    console.log('The file message.txt has been saved!');
});