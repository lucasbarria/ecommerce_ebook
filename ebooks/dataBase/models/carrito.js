module.exports = function (sequelize, dataTypes){
    const carrito = sequelize.define("carrito", {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, 
        id_usuario: dataTypes.INTEGER,
    },{
        tableName: "carrito",
        timestamps: false
    })
    carrito.associate = function(models){
        carrito.belongsTo(models.users, {foreignKey: "id_usuario", as: "cart"})
    }
    return carrito;
};