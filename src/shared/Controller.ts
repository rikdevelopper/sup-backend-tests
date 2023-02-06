import * as express from 'express';

abstract class Controller {

    public router = express.Router();

    public abstract initializeRoutes(): void;
}

export default Controller;