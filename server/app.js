const express = require("express");
const cors = require("cors");
const db = require("./models");
const filterList = require('./filterlist');

const { CarOwners, Sequelize } = db;
const { Op } = Sequelize;


require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.get("/", (req, res) => {
  return res.status(200).json({ message: "Welcome" });
});

app.get('/cars_owners/:id', (req, res)=>{
  const filterId = req.params.id;
  const filterData = filterList.filter(filterObj => filterObj.id === parseInt(filterId) );
  const { start_year, end_year, gender, countries, colors} = filterData[0];
  const capitalizedGender = gender.charAt(0).toUpperCase() + gender.slice(1);

     return CarOwners.findAll({
        where: {
          car_color: { [Op.in]: colors },
          country: { [Op.in]: countries },
          gender: capitalizedGender,
          car_model_year: {
            [Op.between]: [start_year, end_year],
          },
        },
      })
        .then((cars) => {
          res.status(200);
          res.send({
            message: cars,
          });
        })
        .catch((e) => {
          res.send({ error: e.message });
        });
  
})

app.listen(port, () => console.log(`Application runing on port ${port}`));
