var axios = require("axios");

var helper = {
    saveAppt: function (data) {
        return axios.post("/appointment", data)
            .then(function (response) {
                return response;
            })
            .catch(function (err) {
                return err;
            });
    },

    getData: function () {
        return axios.get('/api')
            .then(function (response) {
                return response;
            })
            .catch(function (err) {
                return err;
            });
    },

    getAppt:function (search) {
        return axios.get("/api/" + search)
            .then(function (res) {
                return res;
            })
            .catch(function (err) {
                return err;
            });
    }
};

module.exports = helper;
