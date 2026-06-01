var database = require("../database/config");

function buscarUltimasMedidas(idSensor, limite_linhas) {

    var instrucaoSql = `SELECT 
        ppfd 
                    FROM leituras
                    WHERE fksensor = ${idSensor}
                    ORDER BY id DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// function buscarMedidasEmTempoReal(idAquario) {

//     var instrucaoSql = `SELECT 
//         dht11_temperatura as temperatura, 
//         dht11_umidade as umidade,
//                         DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
//                         fk_aquario 
//                         FROM medida WHERE fk_aquario = ${idAquario} 
//                     ORDER BY id DESC LI'MIT 1`;

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

module.exports = {
    buscarUltimasMedidas,
    // buscarMedidasEmTempoReal
}
