require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());


app.get('/api/data', (req, res) => {
        const data = {
          message: 'Hello from the backend!',
          timestamp: new Date().toISOString(),
        };
        res.json(data);
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
