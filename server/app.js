const express = require("express");
const db = require('./models');
var cors = require("cors");

const { CarOwners, Sequelize } = db;
const { Op } = Sequelize;


require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.get("/", (req, res) => {
  return res.status(200).json({ message: "Welcome" });
});

app.get('/cars_owners', (req, res)=>{
  const { id, color, country, startDate, endDate, limit,gender } = req.query;
    let filters = '';

    if(color){
       filters = { car_color: color };
    }
    
    if (country) {
      filters = { country };
    }
   if (gender) {
     filters = { gender };
   }
   
    if (startDate && endDate){
    filters =  {
        car_model_year: {
          [Op.between]: [parseInt(startDate) , parseInt(endDate)],
        }
      }
    }
      console.log(filters);
      CarOwners.findAll({where: filters, limit})
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
