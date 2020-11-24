const {connectDB} = require("./db/setUpDb")
const express = require("express");
const employeeRouter = require("./router/employeeRouter");
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use("/employee",employeeRouter);
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), async function () {
    await connectDB();
    console.log("Express server listening on port " + server.address().port)
});
