module.exports = function (sequelize, DataTypes) {

    var Presents = sequelize.define("Presents", {
        present_name: DataTypes.STRING,
        price: DataTypes.FLOAT,
        url: DataTypes.STRING
    },
    {
        tableName: "presents"
    });

    return Presents;
}
