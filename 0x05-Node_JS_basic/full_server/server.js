import express from 'express';
import appRoutes from './routes';

const app = express();
const port = 1245;

appRoutes(app);

app.listen(port);

export default app;
module.exports = app;
