import express,{Application,Request,Response} from 'express';
import { routes } from './routes/allRoutes';            //gathering all routes in a single file for better code maintenance
import bodyParser from 'body-parser';

const app: Application =  express();
const port: number = 3000;

app.use(bodyParser.json());                             //parses url text as json
app.use(bodyParser.urlencoded({extended:true}));        //parses text as urlencoded data

//routes
app.use('/', routes);

//start the server
app.listen(port, () => {
    console.log(`connected suucessfully on port ${port}`);
});
