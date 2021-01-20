module.exports = function (sequelize, dataTypes){
    const products = sequelize.define("products", {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, 
        nombre: dataTypes.STRING,
        precio: dataTypes.NUMBER,
        descripcion: dataTypes.STRING,
        imagen: dataTypes.STRING,
        categoria: dataTypes.STRING
    },{
        tableName: "productos",
        timestamps: false
    })
    return products;
};