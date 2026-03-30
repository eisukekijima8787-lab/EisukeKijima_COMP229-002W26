const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();

let projectsRouters = require('../routers/projectsRouters');
let usersRouters = require('../routers/usersRouters');
let servicesRouters = require('../routers/servicesRouters');
let contactsRouters = require('../routers/contactsRouters');

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/projectsRouters', projectsRouters);
app.use('/api/usersRouters', usersRouters);
app.use('/api/servicesRouters', servicesRouters);
app.use('/api/contactsRouters', contactsRouters);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // render the error json
    res.status(err.status || 500);
    res.json(
        {
            success: false,
            message: err.message
        }
    );
});

module.exports = app;