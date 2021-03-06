const Sequelize = require('sequelize')
const db = require('../database/db')


module.exports = db.sequelize.define(
    'room_type',
    {
        code_type:
        {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type_name:
        {
            type: Sequelize.STRING
        },
        description:
        {
            type: Sequelize.STRING
        },
        status:
        {
            type: Sequelize.INTEGER,
            references:
             {
                model: 'status_room', // 'persons' refers to table name
                key: 'code_status', // 'id' refers to column name in persons table
             }
        },
        
    },
    {
        timestamps : false,
        freezeTableName: true
    }
    
 );
