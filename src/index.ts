import express from 'express';
import { connectToDatabase } from './db/connection';
import router from './routes';

const app = express();
const port = 3000;


connectToDatabase()


app.use(express.json())
app.use("/api", router)

app.get('/', (req, res) => {
  res.send('Hello TypeScript with Express!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
