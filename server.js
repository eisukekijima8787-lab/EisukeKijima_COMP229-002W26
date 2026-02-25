import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import projectsRouter from './app/routers/projects.js';
import referencesRouter from './app/routers/references.js';
import servicesRouter from './app/routers/services.js';
import usersRouter from './app/routers/users.js';

const MONGODB_URI = "mongodb+srv://eisukekijima8787_db_user:Eskay2024@eisukekijima000.x91ox33.mongodb.net/?appName=EisukeKijima000";

async function connectDB() {
    try{
        await mongoose.connect(MONGODB_URI, {dbName: "Assignment2"});
        console.log("Connected to my database");
    } catch(err) {
        console.log("Failed to connect to mongo");
    }
}
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send({message: "Hello"});
});

// Mount Routers
app.use('/api/projects', projectsRouter);
app.use('/api/references', referencesRouter);
app.use('/api/services', servicesRouter);
app.use('/api/users', usersRouter);

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

app.listen(3000, () => {
    console.log('server running on http://localhost:3000/');
});