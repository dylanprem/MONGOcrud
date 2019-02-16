const express = require("express");

const mongoose = require("mongoose");

const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const GET_ROUTES = require("./routes/api/GET");
const POST_ROUTES = require("./routes/api/POST");
const PATCH_ROUTES = require("./routes/api/PATCH");
const DELETE_ROUTES = require("./routes/api/DELETE");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

//MongoDB config
const db = process.env.MONGODB_URI;

//Connect to db
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Use Routes
app.use("/api/GET", GET_ROUTES);
app.use("/api/POST", POST_ROUTES);
app.use("/api/PATCH", PATCH_ROUTES);
app.use("/api/DELETE", DELETE_ROUTES);

app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

//Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
