import express from 'express';
import dogRoute from './dog/dogRoute'
const app = express();

app.use('/dogs', dogRoute);

export default app;