import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();
const port = 3333

app.use(express.json());
app.use(cors());

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});