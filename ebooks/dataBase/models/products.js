module.exports = function (sequelize, dataTypes){
    const products = sequelize.define("products", {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, 
        name: dataTypes.STRING,
        price: dataTypes.NUMBER,
        description: dataTypes.STRING,
        image: dataTypes.STRING,
        category: dataTypes.STRING,
        editorial: dataTypes.STRING
    },{
        tableName: "products",
        timestamps: false
    })
    return products;
};