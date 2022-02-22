const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.listen(3000,()=>{
    console.log("running in port 3000");
})