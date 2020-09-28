module.exports = function(sequelize, DataTypes) {

    var Presents = sequelize.define("Present", {
        present_name: DataTypes.STRING,
        price: DataTypes.INTEGER,
        url: DataTypes.STRING
    },
    {
        tableName: "pokemon"
    }
    );

    return Presents;
}