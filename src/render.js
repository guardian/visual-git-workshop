import templateHTML from "./src/templates/main.html!text"
import fs from 'fs'
import csvParse from 'csv-parse/lib/sync';
// import usData from '../assets/us-climate.csv';

const csv = fs.readFileSync('src/assets/us-climate.csv', 'utf8')

const parsed = csvParse(csv, { columns: true })



export async function render() {
    // this function just has to return a string of HTML
    // you can generate this using js, e.g. using Mustache.js

    return templateHTML;
}