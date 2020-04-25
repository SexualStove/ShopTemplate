module.exports = (sequelize, DataTypes) =>{

    var Menu = sequelize.define('Menu', {
        MenuText:{
            type: DataTypes.STRING
        },


    });
    return Menu
};