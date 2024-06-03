import express from 'express';
import mapRoutes from './routes';

const app = express();
const port = 1245;

/** *
 * t should use the routes defined in full_server/routes/index.js
 * It should use the port 1245
 */

mapRoutes(app);
app.listen(port, () => {
  console.log(`Server listening on PORT ${port}`);
});

export default app;
module.exports = app;
