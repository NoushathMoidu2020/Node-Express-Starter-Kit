const express = require("express");
const employeeRouter = express.Router();
const requestTimeLogMiddleWare = require("../middleware/requestTimeLogMiddleWare");
const EmployeeService = require("../service/employeeService");
const multer = require("multer");
const upload = multer({dest: "uploads/"});
employeeRouter.use(requestTimeLogMiddleWare);
employeeRouter.get('/', async function (req, res) {
    res.send(await new EmployeeService().getAllEmployees())
});

employeeRouter.post('/', upload.single("profilePic"), async function (req, res) {
    res.send(await new EmployeeService().save(req.body.name, req.body.department, req.body.salary, req.file.path))
});
module.exports = employeeRouter;
