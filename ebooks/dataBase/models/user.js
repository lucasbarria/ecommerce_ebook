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
    },{
        tableName: "usuarios",
        timestamps: false
    })
    return users;
};