const Sequelize = require('sequelize')
const Op = Sequelize.Op;
const db = require('../database/db')

module.exports = db.sequelize.define(
    'bill',
    {
        code_bill:
        {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        code_emp:
        {
            type: Sequelize.INTEGER,
            referencesKey: 'code_emp',
            
        },
        code_cus:
        {
            type: Sequelize.INTEGER,
            referencesKey: 'code_cus',
            
        },
        bill_date:
        {
            type: Sequelize.DATEONLY,
        },
        total:
        {
            type: Sequelize.STRING,
        }
    },
    {
        timestamps : false,
        freezeTableName: true,
    }
    
 );