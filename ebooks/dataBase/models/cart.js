module.exports = (sequelize, DataTypes) => {
    const cart = sequelize.define('cart', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        id_user: DataTypes.BIGINT,
        status: DataTypes.BOOLEAN
    },
    {
        tableName: 'cart',
        timestamps: false
    })

    cart.associate = models => {
        cart.belongsToMany(models.products, {
            foreignKey: "id_cart",
            otherKey: 'id_product',
            through: models.cartProduct
        }),

        cart.belongsTo(models.users, {
            foreignKey: "id_user"
        })
    }

    return cart;
}