module.exports = function (sequelize, dataTypes){
    const product_cart = sequelize.define("product_cart", {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, 
        id_cart: dataTypes.INTEGER,
        id_product: dataTypes.INTEGER,
        price: dataTypes.STRING,
        quantity: dataTypes.INTEGER
    },{
        tableName: "product_cart",
        timestamps: false
    })
    return product_cart;
};