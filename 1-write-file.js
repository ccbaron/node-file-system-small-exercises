/**
 * Escribe un fichero de nombre "test.txt" con el texto "Hello World!".
 * 
 */

// 1. Importamos el módulo 'fs' (File System) de Node.js.
const fs = require('fs');

// 2. Definimos el nombre del archivo que queremos crear.
const fileName = 'test.txt';

// 3. Definimos el contenido que escribiremos en el archivo.
const content = 'Hello World!';

// 4. Usamos un bloque 'try-catch' para manejar errores.

try {
    
    // 5. Método síncrono: fs.writeFileSync(nombreArchivo, contenido).
    //    - Si 'test.txt' no existe, lo crea.
    //    - Si existe, lo sobrescribe.
    //    - El programa ESPERA aquí hasta que termine la escritura (bloqueante).

    fs.writeFileSync(fileName, content);

    // 6. Si llegamos aquí, la escritura fue exitosa.
    console.log(`Archivo "${fileName}" creado con éxito. Contenido: "${content}"`);
} catch (err) {

    // 7. Si hay un error (ej: permisos, ruta inválida), se ejecuta este bloque.
    console.error('¡Error al escribir el archivo!', err);
}