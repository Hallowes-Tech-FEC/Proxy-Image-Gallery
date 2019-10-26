const express = require('express');
const port = 8284;
const app = express();
const path = require('path');
const absolutePath = path.join(__dirname, './html');
const cors = require("cors");

app.use(cors());

app.use(express.static(absolutePath));

app.listen(port, () => console.log(`Listening on port: ${port}`));


