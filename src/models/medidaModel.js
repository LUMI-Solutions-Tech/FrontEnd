var database = require("../database/config");

function buscarDadosSensor(id) {
    var instrucaoSql = `
        SELECT 
            ppfd,
            dli
        FROM leituras
        WHERE fkSensor = '${id}'
        ORDER BY dataHora DESC
        LIMIT 1;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDadosEspSensor(id) {
    var instrucaoSql = `
        SELECT 
        ppfd,
        dli
        FROM leituras
        WHERE fkSensor = '${id}'
        ORDER BY dataHora DESC
        LIMIT 7;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarDadosSensor,
    buscarDadosEspSensor
};
