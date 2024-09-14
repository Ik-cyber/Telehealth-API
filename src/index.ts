import express from 'express';
import { connectToDatabase } from './db/connection';
import cors from "cors"
import configVals from "./config/config"
import router from './routes';

const app = express();

const { PORT } = configVals

connectToDatabase()

app.use(cors())
app.use(express.json())
app.use("/api", router)

app.get('/', (req, res) => {
  res.send('Hello TypeScript with Express!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
