const appDb = require("../db/sequalize-config");
const {Model, DataTypes } = require('sequelize');

class Employee extends Model {
}
Employee.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: DataTypes.STRING,
    department: DataTypes.STRING,
    profilePicPath: DataTypes.STRING,
    salary: DataTypes.INTEGER,
}, { sequelize: appDb, modelName: 'Employee' });
module.exports = Employee;

