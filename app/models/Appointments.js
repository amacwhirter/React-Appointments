module.exports = function(sequelize, Sequelize) {
    var Appointment = sequelize.define('Appointment', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        date:{
            type:Sequelize.DATE
        },

        time:{
            type:Sequelize.STRING
        },

        description:{
            type:Sequelize.STRING
        }
});

    return Appointment;
};
