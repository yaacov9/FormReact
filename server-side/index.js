const express = require('express');

const app = express();

app.get('/countries', (req, res) => {

  const beg_flag_url = "https://www.countryflags.io/";
  const end_flag_url = "/flat/64.png"

  const values = [
    {
      flag_url: beg_flag_url + "fr" + end_flag_url,
      key: 'FR',
      name: "France",
      identifier: '+33'
    },
    {
      flag_url: beg_flag_url + "us" + end_flag_url,
      key: 'US',
      name: "USA",
      identifier: '+1'
    },
    {
      flag_url: beg_flag_url + "il" + end_flag_url,
      key: "IL",
      name: "Israel",
      identifier: '+972'
    },
    {
      flag_url: beg_flag_url + "cn" + end_flag_url,
      key: 'CN',
      name: "China",
      identifier: '+86',
    },
    {
      flag_url: beg_flag_url + "gb"+ end_flag_url,
      key: "GB",
      name: "United Kingdom",
      identifier: '+44',
    }
  ];
  res.send(values);
});

app.post('/submit', (req, res) => {
  var data = req.body;
  console.log(data);
})

const port = 8080;
app.listen(port, () => console.log(`Server is running and listening on port ${port}`));
