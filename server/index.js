const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const bodyParser = require("body-parser");

app.listen(port, () => console.log(`app listening on ${port}`));
