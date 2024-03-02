require("dotenv").config();
const ConnectionDB = require("./database");
const express = require("express");
const cors = require("cors");
const path = require("path");
require('./models/Patient');
const helmet = require('helmet')
require('./models/Admin');
require('./models/Doctor');
ConnectionDB();

const app = express()

const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

//Available Routes
app.use("/api/patient/auth", require("./routes/patient/auth"))
app.use("/api/admin/auth", require("./routes/admin/auth"))
app.use("/api/doctor/auth", require("./routes/doctor/auth"))
app.use("/api/admin/docregister", require("./routes/admin/docregister"))
app.use("/api/patient/details", require("./routes/patient/details"))
app.use("/api/patient/details", require("./routes/patient/details"))
app.use("/api/patient/appointment", require("./routes/patient/make_appointment"))
app.use("/api/patient/review", require("./routes/patient/reviews"))


app.listen(port, () => {
  console.log(` backend listening at http://localhost:${port}`)
})