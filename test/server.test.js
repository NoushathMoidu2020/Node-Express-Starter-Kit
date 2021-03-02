const {Model} = require("sequelize");
const app = require("../src/server");
const request = require("supertest");
const path = require("path");
const sinon = require("sinon");
const sandbox = sinon.createSandbox();
describe("Test for employee Server", () => {
    beforeEach(() => {
        sandbox.restore();
    });
    it("Integration test for save employee", async () => {
        const createdEmployee = await request(app).post("/employee").field({
            name: "NoushathTester",
            department: "CSE", salary: 1000
        }).attach("profilePic", path.join(__dirname, "resources/profilePic.png"));
        expect(createdEmployee.body.name).toBe("NoushathTester");
    });
    test("Unit test for get Employee", async () => {
        sandbox.stub(Model, "findAll").returns([{
            name: "NoushathUnitTester",
            department: "CSE", salary: 1000
        }]);
        const employeeList = await request(app).get("/employee");
        expect(employeeList.body[0].name).toBe("NoushathUnitTester");
    });
});
