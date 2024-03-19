const express = require('express');

const app = express();
const port = 3000; 


function addNumbers(req, res) {
  const number1 = parseFloat(req.query.number1); 
  const number2 = parseFloat(req.query.number2); 

  
  if (isNaN(number1) || isNaN(number2)) {
    return res.status(400).send('Invalid input: Please provide two valid numbers.');
  }

  const sum = number1 + number2;

  res.json({ "result": sum, "message": "success"}); 
}

app.get('/provideTwoNumbersToAdd', addNumbers);
app.listen(port, () => {
  console.log(`Express server started, listening at port ${port}`);
});