const categoryRoutes = require('./routes/category.routes');
const userRoutes = require('./routes/users.routes');
const tasksRoutes = require('./routes/task.routes');
const cors = require('cors');
const express = require('express');
require('dotenv').config();
const initModels = require('./models/initModels');
const db = require('./utils/database');

initModels();

db.authenticate()
    .then(() => console.log('Connection Data Base successfully'))
    .catch((err) => console.error(err));



db.sync ().then (() => console.log("Initialized database"));
const app = express();

const PORT = process.env.PORT ?? 8000;

app.get('/', (req, res) => {
    res.send('Welcome to my server');
});
app.use(express.json());
app.use(cors());
app.use(userRoutes);
app.use(categoryRoutes);
app.use(tasksRoutes);

app.listen(PORT);
console.log(`Server listening in the port ${PORT}`);