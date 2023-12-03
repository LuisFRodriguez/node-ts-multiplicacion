
import fs from 'fs';
import { yarg } from './config/plugins/yargs.plugin';
import { number } from 'yargs';





let outputMessage = '';


const { b:base, l:limit, s:show } = yarg;



const headerMessage = `
=========================================
            Tabla del ${base}
=========================================
`;


outputMessage = headerMessage + outputMessage;

if(show){ 
    console.log(outputMessage);
}
console.log(outputMessage);

