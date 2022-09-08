

const fs= require('fs');

fs.unlinkSync('./miArchivo.txt');

fs.unlink ('./miArchivo.txt', (error) => {
    if (error) {
        throw error;
    } else {
        console.log(`Archivo eliminado`);
    }
})

