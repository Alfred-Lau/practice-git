import readFile from 'fs-readfile-promise';

const ifleName = './data.txt';

readFile(ifleName).then((data) => { 
    console.log(data.toString());
});
