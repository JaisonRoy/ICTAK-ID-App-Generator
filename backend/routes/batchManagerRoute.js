const routes = require("express").Router();

const applicationModel = require("../models/applicationModel");

routes.get("/applicatioons", (req, res) => {});

routes.patch("/:id/approveapplications", (req, res) => {});

routes.patch("/:id/rejectapplications", (req, res) => {});

module.exports = routes;