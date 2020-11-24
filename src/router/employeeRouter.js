const express = require("express");
const employeeRouter = express.Router();
const requestTimeLogMiddleWare = require("../middleware/requestTimeLogMiddleWare");
const EmployeeService = require("../service/employeeService");
employeeRouter.use(requestTimeLogMiddleWare);
employeeRouter.get('/', async function (req, res) {
    res.send(await new EmployeeService().getAllEmployees())
});

employeeRouter.post('/save', async function (req, res) {
    res.send(await new EmployeeService().save(req.body.name,req.body.department,req.body.salary))
});
module.exports = employeeRouter;
