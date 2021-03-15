module.exports = function (sequelize, dataTypes){
    const cart = sequelize.define("cart", {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, 
        id_user: dataTypes.INTEGER,
        status: dataTypes.BOOLEAN
    },{
        tableName: "cart",
        timestamps: false
    })
    cart.associate = function(models){
        cart.belongsTo(models.users, {foreignKey: "id_user"}),
        cart.belongsToMany(models.products, {
            as: 'products',
            foreignKey: "id_cart",
            otherKey: "id_product",
            through: 'product_cart',
            timestamps: false
        })
    }
    return cart;
};