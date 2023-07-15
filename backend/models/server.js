import express from "express";
import cors from "cors";
import traderRoutes from '../routes/trader.routes.js';
import accionesRoutes from '../routes/acciones.routes.js';
import dineroRoutes from '../routes/dinero.routes.js';
import tipoDineroRoutes from '../routes/tipoDinero.routes.js';

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.accionesPath = '/api/acciones';
        this.dineroPath = '/api/dinero';
        this.tipoDineroPath = '/api/tipoDinero';
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
        this.app.use(this.accionesPath, accionesRoutes);
        this.app.use(this.dineroPath, dineroRoutes);
        this.app.use(this.tipoDineroPath, tipoDineroRoutes);
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`SERVER RUNNING ON PORT ${this.port}`);
        });
    }
}

export default Server;