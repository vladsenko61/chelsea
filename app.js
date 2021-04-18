const express = require("express");
const app = express();
app.listen(3333, () => {
    console.log('server started!');
   });
app.get('/', (req, res) => {
    res.send('Chelsea!')
  });