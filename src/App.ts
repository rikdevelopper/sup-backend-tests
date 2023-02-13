import * as express from 'express';
import * as bodyParser from 'body-parser';
import Controller from "./shared/Controller";

class App {
    public app: express.Application;
    public port: number;
    private server;

    constructor(controllers: Controller[], port: number) {
        this.app = express();
        this.port = port;
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    private initializeMiddlewares(): void {
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(bodyParser.json());
    }

    private initializeControllers(controllers: Controller[]): void {
        controllers.forEach(
            controller => {
                this.app.use('/', controller.router);
            }
        );
    }

    public listen() {
        this.server = this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }

    public shutdown(): void{
        this.server.close();
    }
}

export default App;