var express = require("express"),
    router = express.Router(),
    axios = require("axios");
    path = require("path");
    db = require("../models");


router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
});

router.post("/appointment", function (req, res) {
    console.log(req.body);

    db.Appointment.create(req.body)
        .then(function (booked) {
            console.log("Data has been posted!!!");
        });
    var data = {
        date:req.body.date,
        time:req.body.time,
        description:req.body.description
    };

    res.json(data);
});


router.get("/api", function (req, res) {

    db.Appointment.findAll({raw : true})
        .then(function (data) {
            console.log(data);
            res.json(data);
        })
        .catch(function (err) {
            res.json(err);
        });
});


router.get("/api/:search", function (req, res) {
    var des = req.params.search;

    console.log(des);


    db.Appointment.findAll({raw : true,
        where:{
            description: desc
        }
    })
        .then(function (data) {
            console.log(data);
            res.json(data);
        })
        .catch(function (err) {
            res.json(err);
        });
});

module.exports = router;
