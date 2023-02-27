#!/usr/bin/env node
import minimist from 'minimist';
import { rps } from "../lib/rpsls.js"

const args = minimist(process.argv.slice(2));

if (args.h || args.help) { help(); }

if (args.r || args.rules) { rules(); }

if (args._[0]){
try {
    console.log(JSON.stringify(rps(args._[0])));
} catch (error) {
    if (error instanceof RangeError) {
        console.log(`Error: ${args._[0]} is not in the acceptable range.`);
        rules();
        process.exit(0); 
    }
}
} else {
    console.log(JSON.stringify(rps()));
}

  

function help() {
    console.log(
`Usage: node-rps [SHOT]
Play Rock Paper Scissors (RPS)

    -h, --help      display this help message and exit
    -r, --rules     display the rules and exit

Examples:
    node-rps        Return JSON with single player RPS result.
                    e.g. {"player":"rock"}
    node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"scissors","result":"win"}`);    
    process.exit(0);    
}

function rules() {
    console.log(
`Rules for Rock Paper Scissors:

- Scissors CUTS Paper
- Paper COVERS Rock
- Rock CRUSHES Scissors`);
    process.exit(0);    
}