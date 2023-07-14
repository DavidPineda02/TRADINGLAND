import express from "express";
import cors from "cors";
import traderRoutes from '../routes/trader.routes.js';

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.traderPath = '/api/trader';
        this.middlewars();
        this.routes();
    }

    middlewars(){
        this.app.use(cors());
        this.app.use(express.static('public'));
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.traderPath, traderRoutes);
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`SERVER RUNNING ON PORT ${this.port}`);
        });
    }
}

export default Server;