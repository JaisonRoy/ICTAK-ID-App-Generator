const routes = require("express").Router();

const userModel = require("../models/userModel");
const batchModel = require("../models/batchModel");
const courseModel = require("../models/courseModel");

//batchmanager CRUD
routes.post("/regbatchmanager", (req, res) => {});

routes.get("/getbatchmanager", (req, res) => {});

routes.put("/:id/editbatchmanager", (req, res) => {});

routes.delete("/:id/deletebatchmanager", (req, res) => {});

//course CRUD
routes.post("/createcourse", (req, res) => {});

routes.get("/getcourse", (req, res) => {});

routes.put("/:id/editcourse", (req, res) => {});

routes.delete("/:id/deletecourse", (req, res) => {});

//Batches CRUD
routes.post("/createbatch", (req, res) => {});

routes.get("/getbatch", (req, res) => {});

routes.put("/:id/editbatch", (req, res) => {});

routes.delete("/:id/deletebatch", (req, res) => {});
