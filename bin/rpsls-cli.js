#!/usr/bin/env node
import minimist from 'minimist';
import { rpsls } from "../lib/rpsls.js"

const args = minimist(process.argv.slice(2));

if (args.h || args.help) { help(); }
if (args.r || args.rules) { rules(); }

if (args._[0]){
try {
    console.log(JSON.stringify(rpsls(args._[0])));
} catch (error) {
    if (error instanceof RangeError) {
        console.log(`Error: ${args._[0]} is not in the acceptable range.`);
        rules();
    }
}
} else {
    console.log(JSON.stringify(rps()));
}


function help() {
    console.log(
`Usage: node-rpsls [SHOT]
Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!

  -h, --help        display this help message and exit
  -r, --rules       display the rules and exit

Examples:
  node-rpsls        Return JSON with single player RPSLS result.
                    e.g. {"player":"rock"}
  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"Spock","result":"lose"}`);    
    process.exit(0);    
}

function rules() {
    console.log(
`Rules for the Lizard-Spock Espansion of Rock Paper Scissors:

- Scissors CUTS Paper
- Paper COVERS Rock
- Rock SMOOSHES Lizard
- Lizard POISONS Spock
- Spock SMASHES Scissors
- Scissors DECAPITATES Lizard
- Lizard EATS Paper
- Paper DISPROVES Spock
- Spock VAPORIZES Rock
- Rock CRUSHES Scissors`);
    process.exit(0);    
}
