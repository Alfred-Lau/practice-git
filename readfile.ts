import util from "util";
import fs from "fs";
const readFileAsync = util.promisify(fs.readFile);

const filePath = process.argv[2];

async function main() {
    try {
        const text = await readFileAsync(filePath, {encoding: 'utf8'});
        console.log('CONTENT:', text);
    } catch (err) {
        console.log('ERROR:', err);
    }
}
main();
