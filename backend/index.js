const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jsonwebtoken = require("jsonwebtoken");
const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/idg", {
	useUnifiedTopology: true,
	useNewUrlParser: true,
});

//routers
const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
const applicationRoute = require("./routes/applicationRoute");
const batchManagerRoute = require("./routes/batchManagerRoute");

const app = express();
// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// JWT setup
app.use((req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', (err, decode) => {
            if (err) req.user = undefined;
            req.user = decode;
            next();
        });
    } else {
        req.user = undefined;
        next();
    }
});

//routes
app.use('/user', userRoute);
app.use('/admin', adminRoute);
app.use('/application', applicationRoute);
app.use('/batch', batchManagerRoute)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log("running in port" + PORT);
});