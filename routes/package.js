var express = require("express");

/* Model */
var Package = require("../models/package");

var packageRouter = express.Router();

packageRouter
  .route("/packages")
  .post(function (request, response) {
    console.log("POST /packages");

    var package = new Package(request.body);

    package
      .save()
      .then(function () {
        return response.status(201).send(package);
      })
      .catch(function (error) {
        return response.status(500).send(error);
      });
  })
  .get(function (request, response) {
    console.log("GET /packages");

    Package.find(function (error, packages) {
      if (error) {
        response.status(500).send(error);
        return;
      }

      //console.log(package);

      response.json(packages);
    });
  });

packageRouter
  .route("/packages/:packageId")
  .get(function (request, response) {
    console.log("GET /packages/:packageId");

    var packageId = request.params.packageId;

    Package.findOne({ transaction_id: packageId }, function (error, package) {
      if (error) {
        response.status(500).send(error);
        return;
      }

      //console.log(package);

      response.json(package);
    });
  })
  .put(function (request, response) {
    console.log("PUT /packages/:packageId");

    var packageId = request.params.packageId;

    Package.findOne({ transaction_id: packageId }, function (error, package) {
      if (error) {
        response.status(500).send(error);
        return;
      }

      if (package) {
        for (var property in request.body) {
          package[property] = request.body[property];
        }

        package.save();

        response.json(package);
        return;
      }

      response.status(404).json({
        message: "Package with id " + packageId + " was not found.",
      });
    });
  })
  .patch(function (request, response) {
    console.log("PATCH /packages/:packageId");

    var packageId = request.params.packageId;

    Package.findOne({ transaction_id: packageId }, function (error, package) {
      if (error) {
        response.status(500).send(error);
        return;
      }

      if (package) {
        for (var property in request.body) {
          if (request.body.hasOwnProperty(property)) {
            if (typeof package[property] !== "undefined") {
              package[property] = request.body[property];
            }
          }
        }

        // if (request.body.name) {
        //   package.name = request.body.name;
        // }

        // if (request.body.description) {
        //   package.description = request.body.description;
        // }

        // if (request.body.quantity) {
        //   package.quantity = request.body.quantity;
        // }

        package.save();

        response.json(package);
        return;
      }

      response.status(404).json({
        message: "Package with id " + packageId + " was not found.",
      });
    });
  })
  .delete(function (request, response) {
    console.log("DELETE /packages/:packageId");

    var packageId = request.params.packageId;

    Package.findOne({ transaction_id: packageId }, function (error, package) {
      if (error) {
        response.status(500).send(error);
        return;
      }

      if (package) {
        package.remove(function (error) {
          if (error) {
            response.status(500).send(error);
            return;
          }

          response.status(200).json({
            message: "Package with id " + packageId + " was removed.",
          });
        });
      } else {
        response.status(404).json({
          message: "Package with id " + packageId + " was not found.",
        });
      }
    });
  });

module.exports = packageRouter;
