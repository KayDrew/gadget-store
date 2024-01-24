import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import { engine } from 'express-handlebars';
import flash from 'express-flash';
import session from 'express-session';
import pkg from 'pg-promise';
import routes from './routes/routes.js';


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static('public'));
app.use(express.static('images'));
app.use(session({
    secret: process.env.secret|| "Gadget Store",
    resave: false,
    saveInitialized: false
  }));
  app.use(flash());
  
const connectionString=process.env.URL;
const Pool= pkg();
const db=Pool ({connectionString ,
ssl: true 
});

const route= routes();

app.get("/",route.home);
app.get("/product",route.productPage);
app.get("/contact",route.contactUs);
app.get("/cart",route.cart);
app.get("/checkout",route.checkout);
app.get("/history",route.history);
app.get("/account",route.account);


const PORT= process.env.PORT||5432;
app.listen(PORT,function(){
    console.log("App starting on port "+PORT);
});