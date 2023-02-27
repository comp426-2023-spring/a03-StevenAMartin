#!/usr/bin/env node
import minimist from 'minimist';
import { rpsls } from "../lib/rpsls.js"

const args = minimist(process.argv.slice(2));

if (args.h || args.help) { help(); }
if (args.r || args.rules) { rules(); }

let gameResult = '';
if (args._[0]){
    gameResult = rpsls(args._[0]);
} else {
    gameResult = rpsls();
}
if (gameResult === undefined){
    console.log(`Error: ${args._[0]} is not in the acceptable range.`);
    rules();
} else {
    console.log(JSON.stringify(gameResult));
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
    const r = `Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock SMOOSHES Lizard
    - Lizard POISONS Spock
    - Spock SMASHES Scissors
    - Scissors DECAPITATES Lizard
    - Lizard EATS Paper
    - Paper DISPROVES Spock
    - Spock VAPORIZES Rock
    - Rock CRUSHES Scissors`;

    console.log(r);
    process.exit(0);    
}
