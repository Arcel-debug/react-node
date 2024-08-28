require('dotenv').config();
const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync({ force: false }).then(() => {
    console.log('Database & tables created!');
});

require('./routes/studentRoute')(app);
app.get('/api/example', (req, res) => {
    res.json({ message: 'CORS enabled' });
});

app.use((err, req, res, next) => {
    console.error(err.message);
    const status = err.statusCode || 500;
    res.status(status).send(err.message);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});