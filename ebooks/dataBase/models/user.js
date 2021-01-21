module.exports = function (sequelize, dataTypes){
    const users = sequelize.define("users", {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, 
        nombre: dataTypes.STRING,
        email: dataTypes.STRING,
        password: dataTypes.STRING,
        fecha: dataTypes.INTEGER,
        genero: dataTypes.STRING
    },{
        tableName: "usuarios",
        timestamps: false
    })
    users.associate = function(models){
        users.hasMany(models.carrito, {foreignKey: "id_usuario", as: "cart"})
    }
    return users;
};