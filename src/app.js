const express = require('express');
const patientRoutes = require('./routes/patientRoutes');
const { notFoundHandler, errorHandler } = require('./middleware/errorHandler');
const requestLogger = require('./middleware/requestLogger');

const app = express();

app.use(express.json());
app.use(requestLogger);

app.use('/patients', patientRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;