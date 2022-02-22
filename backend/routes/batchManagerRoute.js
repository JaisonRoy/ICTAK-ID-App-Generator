const routes = require("express").Router();

const applicationModel = require("../models/applicationModel");

routes.get("/applicatioons", (req, res) => {});

routes.put("/:id/approveapplications", (req, res) => {});

routes.put("/:id/rejectapplications", (req, res) => {});
