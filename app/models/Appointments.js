module.exports = function(sequelize, Sequelize) {
    var appointment = sequelize.define('appointment', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        description: {
            type: Sequelize.STRING,
        },

        time: {
            type: Sequelize.DATE,
            validate: {
                allowNull: false
            }
        }

    });

    return appointment;
}
