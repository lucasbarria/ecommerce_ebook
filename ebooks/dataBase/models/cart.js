module.exports = function (sequelize, dataTypes){
    const cart = sequelize.define("cart", {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, 
        id_user: dataTypes.INTEGER,
    },{
        tableName: "cart",
        timestamps: false
    })
    cart.associate = function(models){
        cart.belongsTo(models.users, {foreignKey: "id_user", as: "cart"})
    }
    return cart;
};