module.exports = function (sequelize, dataTypes){
    const users = sequelize.define("users", {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, 
        name: dataTypes.STRING,
        email: dataTypes.STRING,
        password: dataTypes.STRING,
        date: dataTypes.INTEGER,
        genre: dataTypes.STRING
    },{
        tableName: "users",
        timestamps: false
    })
    users.associate = function(models){
        users.hasMany(models.cart, {foreignKey: "id_user", as: "cart"})
    }
    return users;
};