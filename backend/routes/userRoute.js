const routes = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");


routes.post("/reg", async (req, res) => {
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
			});
			await user.save((err, user) => {
				if (err) {
					return res.status(400).send({
						message: err,
					});
				} else {
					user.hashPassword = undefined;
					return res.status(200).json(user);
				}
			});
		}
	} catch (error) {
		res.status(500).json(error);
	}	
});

routes.post("/login", async (req, res) => {
	try {
		const { email, password } = req.body;
		userModel.findOne({ email: email },(err, user) => {
        if (err) throw err;
        if (!user) {
            res.status(401).json({ message: 'Authentication failed. No user found'});
        } else if (user) {
            if (!user.comparePassword(req.body.password, user.hashPassword)) {
                res.status(401).json({ message: 'Authentication failed. Wrong password'});
            } else {
                return res.json({token: jwt.sign({ isAdmin: user.isAdmin, isBatchManager: user.isBatchManager, email: user.email, username: user.username, _id: user.id}, 'RESTFULAPIs')});
            }
        }
    })
	} catch (error) {
		res.status(500).json(error);
	}
});


module.exports = routes;
