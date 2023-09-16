const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

const connectDB = require('./database/db');
const routes = require('./routes/routes');

const PORT = 8000;
const app = express();


app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);


connectDB();

app.listen(PORT, () => {
    console.log(`Express Server listening on port: ${PORT}`);
});


// bodyParser is not compalsory express can also handle the body parsing but if express is not able to handle the body parsing then we can use the body parser 