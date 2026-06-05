var dashModel = require("../models/dashModel");

function buscarDadosEspSensor(req, res) {
    var id = req.params.id;

    console.log(`Recuperando dados do Sensor: ${id}`);

    dashModel.buscarDadosEspSensor(id).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os dados.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarDadosEspSensor
}