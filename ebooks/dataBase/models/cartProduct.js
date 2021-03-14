module.exports = (sequelize, dataTypes) => {
    const cartProduct = sequelize.define('cartProduct', {
        cant: dataTypes.INTEGER,
        id_cart: dataTypes.BIGINT,
        id_product: dataTypes.BIGINT,
        price: dataTypes.STRING,
        quantity: dataTypes.INTEGER
    },
    {
        tableName: 'cartProduct',
        timestamps: false
    }
    )

    return cartProduct;
}