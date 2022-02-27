const routes = require("express").Router();

const applicationModel = require("../models/applicationModel");

const loginRequired = (req, res, next) => {
	if (req.user) {
		next();
	} else {
		return res.status(401).json({ message: "Unauthorized user!" });
	}
};

routes.post("/postapplication", loginRequired, async(req, res) => {
	try {
        const app = new applicationModel({
            student: req.user._id,
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            batch: req.body.batch,
            course: req.body.course,
            startDate: req.body.sdate,
            endDate:req.body.edate
        })
        await app.save((err, app) => {
					if (err) {
						return res.status(400).send({
							message: err,
						});
					} else {
						return res.status(200).json(app);
					}
				});
		
	} catch (error) {
		res.status(500).json(error);
	}
});

routes.get("/applicationstatus", loginRequired, async(req, res) => {
    try {
        const app = await applicationModel.findOne({student:req.user._id});
        const { student, phone, photo,  ...appstat } = app._doc;
        res.status(200).json(appstat);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = routes;