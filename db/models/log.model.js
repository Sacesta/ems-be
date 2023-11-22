module.exports = (sequelize, DataTypes, Model) => {

    class Log extends Model { }

    Log.init({
        // Model attributes are defined here
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        data:{
            type: DataTypes.TEXT
        },
        approved:{
            type:DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'logs' // We need to choose the model name
    });

    return Log;
}