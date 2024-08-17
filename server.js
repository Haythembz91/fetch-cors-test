const PORT = 8000;
const express = require('express');
const cors = require ('cors')
const app = express();
app.use(cors())

app.get('/name', (req, res) => {
  res.json({ name: 'Ania Kubow' });
});


app.get('/', (req, res) => {
  res.json('Ania is the best');
});



app.listen(PORT, () => console.log('Server is running on Port: ' + PORT));
