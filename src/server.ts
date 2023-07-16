import express, { Express, NextFunction, Request, Response } from 'express';
import { ApiRouter } from './routes/api-routers';

const port = 5000;

const app: Express =  express();
const apiRouter = new ApiRouter();

app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Accrss-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader(
        'Access-Controller-Allow-Methods',
        'GET, POST, PATCH, DELETE'
    );

    next();
});

app.use('', apiRouter.router);

app.use((req: Request, res: Response) => {
    res.type('text/plain');
    res.status(404);
    res.send('Page is not found!');
});

app.listen(port, () => {
    console.log('server is running on http://localhost:' + port.toString());
});

