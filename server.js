const path = require("path");
const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static file
app.use(express.static(path.join(__dirname, "public")));

app.use("/openai", require("./routes/openaiRoute"));

app.listen(port, () => console.log(`Server listening on port: ${port}`));
