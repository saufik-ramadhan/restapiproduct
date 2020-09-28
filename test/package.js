//During the test the env variable is set to test
process.env.NODE_ENV = "test";

let mongoose = require("mongoose");
let Package = require("../models/package");

// dev - dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");
let should = chai.should();

chai.use(chaiHttp);

// Emptying Database
describe("Package", () => {
  it("Should delete all data", (done) => {
    Package.deleteMany({}, (err) => {
      done();
    });
  });
});

/**
 * GET packages
 */
describe("/GET packages", () => {
  it("it should GET all the packages", (done) => {
    chai
      .request(server)
      .get("/packages")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        res.body.length.should.be.eql(0);
        done();
      });
  });
});

/*
 * POST packages
 */
describe("/POST package", () => {
  it("it should not POST a package without pages field", (done) => {
    let data = require("../dummy.json");
    chai
      .request(server)
      .post("/packages")
      .send(data)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a("object");
        done();
      });
  });
});

/**
 * GET packages/:id
 */
describe("/GET packages/:id", () => {
  it("it shouldn't be null", (done) => {
    let data = require("../dummy.json");
    let package = new Package(data);
    package.save((err, package) => {
      chai
        .request(server)
        .get("/packages/" + data.transaction_id)
        .send(package)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });
});

/**
 * PUT packages/:id
 */
describe("/PUT packages/:id", () => {
  it("it shouldn't be null", (done) => {
    let data = require("../dummy.json");
    let package = new Package(data);
    package.save((err, package) => {
      chai
        .request(server)
        .put("/packages/" + data.transaction_id)
        .send(package)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });
});

/**
 * PUT packages/:id
 */
describe("/PATCH packages/:id", () => {
  it("it shouldn't be null", (done) => {
    let data = require("../dummy.json");
    let package = new Package(data);
    package.save((err, package) => {
      chai
        .request(server)
        .patch("/packages/" + data.transaction_id)
        .send(package)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });
});

/**
 * DELETE packages/:id
 */
describe("/DELETE packages/:id", () => {
  it("it should be deleted", (done) => {
    let data = require("../dummy.json");
    let package = new Package(data);
    package.save((err, package) => {
      chai
        .request(server)
        .delete("/packages/" + data.transaction_id)
        .send(package)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });
});
