const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 20 ) => {

 try {
    
    let consola = '';
    let Salida = '';
    for (let index = 1; index <= hasta; index++) {
        
         let calculo = base * index;
         Salida += `${ base } x  ${ index } = ${ calculo }\n`;
         consola += `${ base } ` +  'x'.red + ` ${ index } = ${ calculo }\n`;
        
    }
    
    if (listar)
    { 
        console.log('==========================='.red);
        console.log('     Tabla del: '.green, base );
        console.log('==========================='.red);
        console.log(consola);
        console.log(`==================`.red);
    }
    fs.writeFileSync(`./Salida/tabla-${ base }.txt`, Salida)
        return `tabla-${ base }.txt`;
        //console.log(`tabla-${ base }.txt creado`);//Si funciona
    

}catch(err) {

 throw err

}  
    




}


module.exports = {
    crearArchivo: crearArchivo

}