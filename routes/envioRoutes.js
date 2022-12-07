const express = require("express");
const router = express.Router();
const Envio = require("../models/envio");

router.route("/").get((req, res, next) => {
  Envio.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

router.route("/create").post((req, res, next) => {
  Envio.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

router.route("/edit/:id").put((req, res, next) => {
  Envio.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        console.log("Envio updated successfully !");
        res.json(data);
      }
    }
  );
});

router.route("/delete/:id").delete((req, res, next) => {
  Envio.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        message: data,
      });
    }
  });
});

router.route("/:id").get((req, res, next) => {
  Envio.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

module.exports = router;
