const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

require("dotenv").config();
const PORT = process.env.PORT || 8000;
const app = express();
const path = require("path")


//Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "client", "build")))


//Routes
app.use("/email", require("./routes/email"))

//Error Handling
app.use((err, req, res, next) => {
    console.error(err);
    return res.send({ message: err.message });
});

//Catchall Route handler
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//Listen
app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
});
