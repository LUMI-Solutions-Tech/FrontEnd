var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/sensor/:id", function (req, res) {
    medidaController.buscarDadosSensor(req, res);
});

module.exports = router;

