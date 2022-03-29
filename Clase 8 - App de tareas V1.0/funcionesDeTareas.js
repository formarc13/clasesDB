const fs = require('fs');

let funcionesDeTareas = {
    leerJson: function () {
        let tareasJson = fs.readFileSync('./tareas.json', 'utf-8'); // Leemos el archivo json
        let tareasParseadas = JSON.parse(tareasJson);
        return tareasParseadas
    }
}

module.exports = funcionesDeTareas