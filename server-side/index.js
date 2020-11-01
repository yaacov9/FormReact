const express = require('express');
const app = express();
const cors = require('cors');

// Solve CORS problems
app.use(cors({credentials: true, origin: true}));

const bodyParser = require('body-parser');
app.use(bodyParser.json());       // to support JSON-encoded bodies

// Request GET for the countries
app.get('/countries', (req, res) => {

  const beg_flag_url = "https://www.countryflags.io/";
  const end_flag_url = "/flat/64.png"

  const values = [
    {
      flag_url: beg_flag_url + "fr" + end_flag_url,
      value: 'FR',
      label: "France",
      identifier: '+33'
    },
    {
      flag_url: beg_flag_url + "us" + end_flag_url,
      value: 'US',
      label: "USA",
      identifier: '+1'
    },
    {
      flag_url: beg_flag_url + "il" + end_flag_url,
      value: "IL",
      label: "Israel",
      identifier: '+972'
    },
    {
      flag_url: beg_flag_url + "cn" + end_flag_url,
      value: 'CN',
      label: "China",
      identifier: '+86',
    },
    {
      flag_url: beg_flag_url + "gb"+ end_flag_url,
      value: "GB",
      label: "United Kingdom",
      identifier: '+44',
    }
  ];
  res.send(values);
});

// POST request to submit a form
app.post('/submit', (req, res) => {
  console.log(req.body,"efGTHYJ",req.data)
  const data = req.body;
})

const port = 8080;
app.listen(port, () => console.log(`Server is running and listening on port ${port}`));
