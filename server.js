const PORT = 8000;
const express = require('express');
const app = express();

app.get('/name', (req, res) => {
  res.json({ name: 'Ania Kubow' });
});

app.listen(PORT, () => console.log('Server is running on Port: ' + PORT));
