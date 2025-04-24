/**
 * Lee el fichero "test.txt" que acabas de crear y muestra su contenido por la consola
 */
// 1. Importamos el módulo 'fs' (File System) de Node.js.
//    
const fs = require('fs');

// 2. Definimos el nombre del archivo que queremos leer.
const fileName = 'test.txt';

// 3. Usamos un bloque 'try-catch' para manejar posibles errores.
try {
    // 4. Método síncrono: fs.readFileSync(nombreArchivo, codificación).
    //    - Lee el contenido del archivo.
    //    - El parámetro 'utf8' especifica la codificación del texto (si no se usa, devuelve un buffer binario).
    //    - El programa ESPERA aquí hasta que termine la lectura (bloqueante).

    const fileContent = fs.readFileSync(fileName, 'utf8');

    // 5. Si llegamos aquí, la lectura fue exitosa.
    console.log(`Contenido de "${fileName}":\n${fileContent}`);
} catch (err) {
    
    // 6. Si hay un error (ej: archivo no existe, permisos denegados), se ejecuta este bloque.
    console.error('¡Error al leer el archivo!', err);
}