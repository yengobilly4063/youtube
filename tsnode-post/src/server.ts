import express from 'express';
import cors from 'cors';
import './config/dotenv.config';
import mainRouter from './routes/main.route';
import { handleError } from './middlewares/error.middleware';
import postRouter from './routes/post.route';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: ['*'], credentials: true }));

const port = parseInt(process.env.PORT as string) || 3001;
const host = process.env.HOST || 'localhost';

app.use('/api/main', mainRouter);
app.use('/api/posts', postRouter);

app.use(handleError);

app.listen(port, host, () => {
    console.log(`[Server] runnig on http://${host}:${port}`);
});
