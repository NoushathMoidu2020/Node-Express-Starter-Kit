const appDb = require("./sequalize-config");
const Employee = require("./Employee");
const connectDB = async function (){
    await appDb.authenticate();
    await Employee.sync();
};
const closeDB = function (){
    if(appDb){
       appDb.close();
    }
};
module.exports = {connectDB,closeDB};
