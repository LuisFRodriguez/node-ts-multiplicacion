
import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';



export const yarg = yargs(process.argv)
    .option('b',{
        alias:'base',
        type:'number',
        demandOption:true,
        describe:'Es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias:'limit',
        type:'number',
        default:10,
        describe:'Es el limite de la tabla de multiplicar'
    })
    .option('s',{
        alias:'show',
        type:'boolean',
        default:false,
        describe:'Muestra la tabla de multiplicar'
    })
    .option('n',{
        alias:'name',
        type:'string',
        default:'multiplication-table',
        describe:'File name'
    })
    .option('d',{
        alias:'destination',
        type:'string',
        default:'outputs',
        describe:'File destination'
    })
    .check((argv , option)=>{
        if(argv.b < 1) throw 'Error: base must be a number';
        return true;
    
        
    })
    .parseSync()




