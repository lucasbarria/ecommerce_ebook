module.exports = function (sequelize, dataTypes){
    const carrito_producto = sequelize.define("carrito_producto", {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, 
        id_carrito: dataTypes.INTEGER,
        id_producto: dataTypes.INTEGER,
        precio: dataTypes.STRING,
        cantidad: dataTypes.INTEGER
    },{
        tableName: "carrito_producto",
        timestamps: false
    })
    return carrito_producto;
};