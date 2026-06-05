var database = require("../database/config");

function buscarDadosEspSensor(id) {
    var instrucaoSql = `
        SELECT 
        ppfd,
        dli
        FROM leituras
        WHERE fkSensor = '${id}'
        ORDER BY dataHora DESC
        LIMIT 12;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarDadosEspSensor
};
