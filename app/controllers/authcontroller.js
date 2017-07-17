var express = require("express"),
    router = express.Router(),
    axios = require("axios");
    db = require("../models");


router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
});

module.exports = router;
