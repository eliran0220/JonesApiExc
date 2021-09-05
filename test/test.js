let chai = require('chai');
let server = require('../app')
let chaiHttp = require('chai-http');
const Constants = require('../helpers/constants').Constants;
const {assert} = require('chai');

chai.should();
chai.use(chaiHttp);
describe("Test api...", () => {
    describe("POST a new order", () => {
        it("Should post a new order", (done) => {
            chai.request(server).post("/api/router/saveOrder").send({
                order_items: [
                    "shawarma", "cola"
                ],
                customer_name: "Eliran",
                phone_number: "0542198830",
                email: "eliran0220@mail.com",
                delivery_place: "Petah Tikva",
                price: 50,
                payment_method: "cash"
            }).end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql(Constants.ORDER.success)
                done();
            })
        });
    });

    describe("Post a new order with a null param", () => {
        it("Should return an error : Please type your name", (done) => {
            chai.request(server).post("/api/router/saveOrder").send({
                order_items: [
                    "shawarma", "cola"
                ],
                customer_name: "",
                phone_number: "0542198830",
                email: "eliran0220@mail.com",
                delivery_place: "Tel Aviv",
                price: 50,
                payment_method: "Visa"
            }).end((err, res) => {
                res.should.have.status(400);
                assert.equal(res.body.customer_name, Constants.ORDER.missing_custoner_name)
                done();
            })
        })
    });

    describe("Post a new order with not valid email", () => {
        it("Should return an error: Email is not in valid form", (done) => {
            chai.request(server).post("/api/router/saveOrder").send({
                order_items: [
                    "shawarma", "cola"
                ],
                customer_name: "Eliran",
                phone_number: "0542198830",
                email: "eliranmail.com",
                delivery_place: "test",
                price: 50,
                payment_method: "visa"
            }).end((err, res) => {
                res.should.have.status(400);
                assert.equal(res.body.email, Constants.EMAIL.fail)
                done();
            })
        })
    });

    describe("Post a new order with not valid phone", () => {
        it("Should return an error, email is not valid", (done) => {
            chai.request(server).post("/api/router/saveOrder").send({
                order_items: [
                    "shawarma", "cola"
                ],
                customer_name: "Eliran",
                phone_number: "054219883a",
                email: "eliran@Gmail.com",
                delivery_place: "test",
                price: 50,
                payment_method: "visa"
            }).end((err, res) => {
                res.should.have.status(400);
                assert.equal(res.body.phone, Constants.PHONE.fail)
                done();
            })
        })
    });
    
    describe("Get all the orders of the same day", () => {
        it("Should return the first order made above, if there are more orders in the database, return them also", (done) => {
            chai.request(server).get("/api/router/getOrders").send({}).end((err, res) => {
                res.should.have.status(200);
                done();
            })
        })
    });

});
