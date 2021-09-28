import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import path from 'path';
import http, { request } from 'http';
import 'express-async-errors';
import { Server } from 'socket.io';
import router from '@src/routes';

const app = express();

const serverHttp = http.createServer(app);
const io = new Server(serverHttp, { cors: { origin: '*' } });

app.use('/public', express.static(path.join(__dirname, '..', 'src', 'tmp')));
app.use(express.json());
app.use(cors());
app.use(router);

app.get('*', (request: Request, response: Response, next: NextFunction) => {
    throw new Error('NotFound');
});

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof Error) {
            return response.status(400).json({
                error: err.message,
            });
        }

        return response.status(500).json({
            status: 'Error',
            message: 'Internal Server Error',
        });
        next();
    },
);

export { serverHttp, io };
