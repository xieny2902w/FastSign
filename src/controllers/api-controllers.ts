import { Request, Response, NextFunction } from 'express';

export class ApiControllers {

    public getHomePage = (req: Request, res: Response) => {
        res.type('text/plain');
        res.send('HomePage');
    };

    public getArticlesPage = (req: Request, res: Response) => {
        res.type('text/plain');
        res.send('Articles Page');
    };

    public getAboutMePage = (req: Request, res: Response) => {
        res.type('text/plain');
        res.send('About Me Page');
    };
};