import express, { Request, Response } from 'express';

const PORT = process.env.PORT || 3000;
const GET_OBJECT = {
    hello: "world"
};

const app = express();

app.get('/api/hello', (_, res: Response) => {
    return res.json(GET_OBJECT);
});

app.listen(PORT, () => {
    console.log('server is running on PORT: ' + PORT.toString());
});
