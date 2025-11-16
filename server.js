// 1. Cargar las librerías necesariasnpm startnpm start
const express = require('express');
const path = require('path');

// 2. Inicializar la aplicación Express
const app = express();
const port = 3000; // El puerto donde se ejecutará el servidor

// 3. Configurar el middleware para servir archivos estáticos
// Esta línea es CLAVE: Le dice a Express que la carpeta actual
// contiene archivos (como index.html, script.js) que puede servir.
app.use(express.static(path.join(__dirname, '/')));

// 4. Ruta principal
// Cuando alguien visite http://localhost:3000/,
// le enviaremos el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 5. Iniciar el servidor y escuchar en el puerto 3000
app.listen(port, () => {
    console.log(`¡Servidor iniciado correctamente!`);
    console.log(`Abre tu navegador en http://localhost:${port}`);
});
