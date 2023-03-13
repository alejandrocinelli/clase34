import express from 'express';
import routes from './routes/index.js';
import logger from './logger.js';

const app = express();

const port = process.env.PORT || 3000;

app.use('/', routes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    logger.info(`Example app listening on port ${port}`);
    }) ;

export default app;