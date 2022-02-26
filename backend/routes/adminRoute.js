const routes = require("express").Router();
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

const userModel = require("../models/userModel");
const batchModel = require("../models/batchModel");
const courseModel = require("../models/courseModel");


const loginRequired = (req, res, next) => {
	if (req.user.isAdmin) {
		next();
	} else {
		return res.status(401).json({ message: "Unauthorized user!" });
	}
};

//batchmanager CRUD
routes.post("/regbatchmanager", loginRequired, async(req, res) => {
    try {
			const takenmail = await userModel.findOne({ email: req.body.email });
			if (takenmail) {
				res.json({ message: "Email has already been taken" });
			} else {
				password = await bcrypt.hash(req.body.password, 10);
				const user = new userModel({
					name: req.body.name,
					email: req.body.email,
					hashPassword: password,
                    isBatchManager: true
				});
				await user.save((err, user) => {
					if (err) {
						return res.status(400).send({
							message: err,
						});
					} else {
                        let mailTransporter = nodemailer.createTransport({
                                service: "gmail",
                                auth: {
                                    user: "nodemailer96@gmail.com",
                                    pass: "nayanthara@96",
                                },
                        });

                        let mailDetails = {
                                from: "nodemailer96@gmail.com",
                                to: req.body.email,
                                subject: "Test mail by ID",
                                text: "Credential mail for ID Generator",
                                html:`Email: ${req.body.email} <br/> Password: ${req.body.password}`
                                
                        };

                        mailTransporter.sendMail(mailDetails);                       
						user.hashPassword = undefined;
						return res.status(200).json({user});
					}
				});
			}
		} catch (error) {
			res.status(500).json(error);
		}
});

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

module.exports = routes;