import 'reflect-metadata';
import 'express-async-errors';
import express, { Express } from 'express';
import cors from 'cors';
import path from 'path';
import { loadEnv } from './config';
import { handleApplicationErrors } from 'middlewares/error-handling-middleware';

loadEnv();

const app = express();

app
  .use(cors())
  .use(express.json())
  .get('/health', (_req, res) => res.send('OK!'))
  .use(handleApplicationErrors);

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

export function init(): Promise<Express> {
  return Promise.resolve(app);
}

export default app;
