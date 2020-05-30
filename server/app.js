const express = require("express");
const db = require('./models');
const { CarOwners } = db;

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  return res.status(200).json({ message: "Welcome" });
});

console.log(process.env.NODE_ENV);
app.get('/cars_owners', (req, res)=>{
  CarOwners.findAll().then(cars=>{
    res.status(200);
    res.send({
      message: cars
    })

  }).catch(e => {res.send({ error: e.message });})
  
})

app.listen(port, () => console.log(`Application runing on port ${port}`));
