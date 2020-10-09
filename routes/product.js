var express = require("express");

/**
 * Model
 */
var Product = require("../models/product");

/**
 * Router
 */
var productRouter = express.Router();

productRouter
  .route("/products")
  .post(function (request, response) {
    console.log("POST /products");

    var product = new Product(request.body);

    product
      .save()
      .then(function () {
        return response.status(201).send(product);
      })
      .catch(function (error) {
        return response.status(500).send(error);
      });
  })
  .get(function (request, response) {
    console.log("GET /products");

    Product.find(function (error, products) {
      if (error) {
        response.status(500).send(error);
        return;
      }

      //console.log(product);

      response.json(products);
    });
  });

productRouter
  .route("/products/:productId")
  .get(function (request, response) {
    console.log("GET /products/:productId");

    var productId = request.params.productId;

    Product.findOne({ id: productId }, function (error, product) {
      if (error) {
        response.status(500).send(error);
        return;
      }

      //console.log(product);

      response.json(product);
    });
  })
  .put(function (request, response) {
    console.log("PUT /products/:productId");

    var productId = request.params.productId;

    Product.findOne({ id: productId }, function (error, product) {
      if (error) {
        response.status(500).send(error);
        return;
      }

      if (product) {
        for (var property in request.body) {
          product[property] = request.body[property];
        }

        product.save();

        response.json(product);
        return;
      }

      response.status(404).json({
        message: "Product with id " + productId + " was not found.",
      });
    });
  })
  .patch(function (request, response) {
    console.log("PATCH /products/:productId");

    var productId = request.params.productId;

    Product.findOne({ id: productId }, function (error, product) {
      if (error) {
        response.status(500).send(error);
        return;
      }

      if (product) {
        for (var property in request.body) {
          if (request.body.hasOwnProperty(property)) {
            if (typeof product[property] !== "undefined") {
              product[property] = request.body[property];
            }
          }
        }

        product.save();

        response.json(product);
        return;
      }

      response.status(404).json({
        message: "Product with id " + productId + " was not found.",
      });
    });
  })
  .delete(function (request, response) {
    console.log("DELETE /products/:productId");

    var productId = request.params.productId;

    Product.findOne({ id: productId }, function (error, product) {
      if (error) {
        response.status(500).send(error);
        return;
      }

      if (product) {
        product.remove(function (error) {
          if (error) {
            response.status(500).send(error);
            return;
          }

          response.status(200).json({
            message: "Product with id " + productId + " was removed.",
          });
        });
      } else {
        response.status(404).json({
          message: "Product with id " + productId + " was not found.",
        });
      }
    });
  });

module.exports = productRouter;
