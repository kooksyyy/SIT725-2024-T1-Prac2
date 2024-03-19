const express = require('express');

const app = express();
const port = 3000; 


function addNumbers(req, res) {
  const num1 = parseFloat(req.query.num1); // Get number 1 from the query string
  const num2 = parseFloat(req.query.num2); // Get number 2 from the query string

  // Input validation to ensure both numbers are provided and valid
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send('Invalid input: Please provide two valid numbers.');
  }

  const sum = num1 + num2;

  res.json({ result: sum }); // Send the sum as JSON response
}

// Create a GET route for adding numbers
app.get('/add', addNumbers);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});