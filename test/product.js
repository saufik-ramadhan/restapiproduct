//During the test the env variable is set to test
process.env.NODE_ENV = "test";

let mongoose = require("mongoose");
let Product = require("../models/product");

// dev - dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");
let should = chai.should();

chai.use(chaiHttp);

// Emptying Database
describe("Product", () => {
  it("Should delete all data", (done) => {
    Product.deleteMany({}, (err) => {
      done();
    });
  });
});

/**
 * GET products
 */
describe("/GET products", () => {
  it("it should GET all the products", (done) => {
    chai
      .request(server)
      .get("/products")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        res.body.length.should.be.eql(0);
        done();
      });
  });
});

/*
 * POST products
 */
describe("/POST product", () => {
  it("it should not POST a product without pages field", (done) => {
    let data = require("../dummyproduct.json");
    chai
      .request(server)
      .post("/products")
      .send(data)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a("object");
        done();
      });
  });
});

/**
 * GET products/:id
 */
describe("/GET products/:id", () => {
  it("it shouldn't be null", (done) => {
    let data = require("../dummyproduct.json");
    let product = new Product(data);
    product.save((err, product) => {
      chai
        .request(server)
        .get("/products/" + data.id)
        .send(product)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });
});

/**
 * PUT products/:id
 */
describe("/PUT products/:id", () => {
  it("it shouldn't be null", (done) => {
    let data = require("../dummyproduct.json");
    let product = new Product(data);
    product.save((err, product) => {
      chai
        .request(server)
        .put("/products/" + data.id)
        .send(product)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });
});

/**
 * PUT products/:id
 */
describe("/PATCH products/:id", () => {
  it("it shouldn't be null", (done) => {
    let data = require("../dummyproduct.json");
    let product = new Product(data);
    product.save((err, product) => {
      chai
        .request(server)
        .patch("/products/" + data.id)
        .send(product)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });
});

/**
 * DELETE products/:id
 */
describe("/DELETE products/:id", () => {
  it("it should be deleted", (done) => {
    let data = require("../dummyproduct.json");
    let product = new Product(data);
    product.save((err, product) => {
      chai
        .request(server)
        .delete("/products/" + data.id)
        .send(product)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });
});
