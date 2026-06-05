var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/sensor/:id", function (req, res) {
    dashController.buscarDadosEspSensor(req, res);
});

module.exports = router;

