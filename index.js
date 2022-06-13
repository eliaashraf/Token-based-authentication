const express = require('express');
const app = express();

app.use(express.json());

//Importing routes
const authRoute = require('./routes/auth');

//Route Middlewares
app.use('/api/users', authRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on ${port}`));
