const express = require('express');

const app = express();

app.get('/test', (req, res) => {
  res.json('Test 1-2 1-2');
});

const port = 8080;
app.listen(port, () => console.log(`Server is running and listening on port ${port}`));
