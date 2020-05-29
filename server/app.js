const express = require( 'express');
const bodyParser = require('body-parser');

 
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  res.status(200).json({ message: "Welcome" })
});


app.listen(port, () => console.log(`Application runing on port ${port}`));