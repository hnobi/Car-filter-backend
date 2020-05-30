const express = require("express");

require("dotenv").config();
// 

const app = express();
const port = process.env.port;



app.get("/", (req, res) => {
  return res.status(200).json({ message: "Welcome" });
});



app.listen(port, () => console.log(`Application runing on port ${port}`));
