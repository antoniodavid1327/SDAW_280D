# Repositorio Git SDAW_280D

* **Estudiante**: Antonio David Fernandez Mulero
* **Asignatura**: SDAW (Sistemas de Desarrollo de Aplicaciones Web)
* **Tarea**: Uso de repositorios digitales (Git) I

---

###  Para la Rama 4 (`rama4_AntonioDavid...`)

**Importante:** Recuerda que antes de hacer esto debes haber vuelto a `main` (`git checkout main`) y creado la rama 4 limpia. Al abrir el archivo, **no verás lo que pusiste en la rama 3**, y eso es correcto.

Pega esto en tu `README.md`:

```markdown
## Procedimiento de Conexión con GitLab
Para conectar este repositorio local, que ya estaba vinculado a GitHub, con un nuevo repositorio remoto en GitLab, seguí estos pasos:

1. Creé un proyecto vacío en GitLab sin README.
2. Añadí el nuevo remoto con el comando:
   `git remote add gitlab https://gitlab.com/Antodav1234/sdaw_29280.git`
3. Verifiqué los remotos con `git remote -v` para confirmar que tenía tanto 'origin' como 'gitlab'.
4. Subí la rama principal al nuevo remoto usando:
   `git push -u gitlab main`

## Información técnica añadida desde rama 4
Se incluye información para conectar un repositorio local con GitLab.

## 1. Descripción del Proyecto

Este repositorio ha sido creado como parte de la tarea "Uso de repositorios digitales (Git) I". [cite_start]El objetivo es demostrar el flujo de trabajo completo de Git y GitHub, incluyendo la inicialización de un proyecto local, la gestión de versiones, el uso de ramas para desarrollo simultáneo y la integración de cambios mediante *pull requests*[cite: 2].

El proyecto base es una pequeña aplicación web de Node.js que utiliza Express para servir un archivo `index.html`. [cite_start]Esta página contiene un botón que, al ser pulsado, muestra un saludo personalizado ("Hola Antonio David Fernandez Mulero") mediante JavaScript[cite: 34, 36].

## 2. Estructura del Proyecto

El repositorio contiene los siguientes archivos clave:

* **`index.html`**: La página web principal que se sirve al usuario. Contiene el botón de saludo.
* **`script.js`**: Contiene la función JavaScript que se ejecuta al pulsar el botón.
* [cite_start]**`server.js`**: El servidor Node.js (usando Express) responsable de levantar el proyecto en un entorno local[cite: 36].
* **`package.json`**: Define las dependencias del proyecto (como `express`) y los scripts (como `npm start`).
* [cite_start]**`.gitignore`**: Archivo que especifica qué archivos y carpetas (como `node_modules`) deben ser ignorados por Git[cite: 44].
* **`README.md`**: Este mismo archivo, que documenta el proyecto.

## 3. 🚀 Cómo Levantar el Servidor en Local

[cite_start]Para ejecutar este proyecto en tu máquina local, sigue estos pasos[cite: 25, 46]:

1.  **Clona el repositorio** (o asegúrate de estar en la carpeta del proyecto):
    ```bash
    git clone [https://github.com/tu_usuario/SDAW_280D.git](https://github.com/tu_usuario/SDAW_280D.git)
    cd SDAW_280D
    ```

2.  [cite_start]**Instala las dependencias** de Node.js (principalmente Express)[cite: 48]:
    ```bash
    npm install express
    ```

3.  **Inicia el servidor**:
    ```bash
    npm start
    ```

4.  **Abre tu navegador** y visita `http://localhost:3000` (o el puerto que hayas configurado en `server.js`). Deberías ver la página y poder interactuar con el botón.

---
## 4. Información Técnica (Añadida desde rama 1)

[cite_start]En esta sección se describen los principales comandos de Git utilizados durante la práctica[cite: 71]:

* **`git init`**: (COMPLETAR) Inicializa un nuevo repositorio de Git vacío en el directorio actual. [cite_start]Crea una carpeta oculta `.git` que almacena toda la información de seguimiento[cite: 72].
* **`git add`**: (COMPLETAR) Añade archivos nuevos o modificados al "área de seguimiento" (staging area). [cite_start]Prepara los cambios para que sean incluidos en el próximo *commit*[cite: 73].
* [cite_start]**`git commit`**: (COMPLETAR) Guarda una instantánea permanente de los cambios que están en el área de seguimiento en el historial del repositorio local[cite: 74].
* **`git branch`**: (COMPLETAR) Permite listar todas las ramas locales. [cite_start]Con argumentos adicionales, puede usarse para crear una nueva rama (`git branch <nombre>`) o eliminar una (`git branch -d <nombre>`)[cite: 75].
* **`git merge`**: (COMPLETAR) Fusiona los cambios de una rama en otra. [cite_start]Por ejemplo, `git merge <rama-feature>` fusionaría los cambios de `<rama-feature>` en la rama actual[cite: 76].
* [cite_start]**`git push`**: (COMPLETAR) Sube los *commits* locales al repositorio remoto (como GitHub), actualizando la rama remota con los cambios locales[cite: 77].

## 5. Log de Commits (Añadido desde rama 2)

[cite_start]A continuación, se muestra el historial de *commits* del repositorio obtenido con el comando `git log --oneline`[cite: 78, 81]: