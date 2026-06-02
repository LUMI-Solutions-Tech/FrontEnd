var database = require("../database/config");

function buscarDadosSensor(id) {
    var instrucaoSql = `
        SELECT 
            ppfd
        FROM leituras
        WHERE fkSensor = '${id}'
        ORDER BY dataHora DESC
        LIMIT 1;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// function listarTemporadas() {
//     var instrucaoSql = `SELECT ano FROM temporada;`;
//     return database.executar(instrucaoSql);
// }

module.exports = {
    buscarDadosSensor
   // listarTemporadas
};
