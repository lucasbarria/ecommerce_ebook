module.exports = (sequelize, dataTypes) => {
    const users = sequelize.define('users', {
        id: {
            type: dataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        name: dataTypes.STRING,
        email: dataTypes.STRING,
        password: dataTypes.STRING,
        date: dataTypes.INTEGER,
        genre: dataTypes.STRING,
        admin: dataTypes.INTEGER
    },
        {
            tableName: 'users',
            timestamps: false
        })

        users.associate = (models) => {

            users.hasMany(models.cart, {
                foreignKey: 'id_user'
            })
        }

    return users;
}