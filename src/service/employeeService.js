const Employee = require("../db/Employee");
class EmployeeService{
    async getAllEmployees(){
        return await Employee.findAll();
    }

    async save(name, department, salary, profilePicPath) {
        return await Employee.create({name, department, salary, profilePicPath});
    }
}
module.exports = EmployeeService;
