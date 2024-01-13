import cors from 'cors'
import express from 'express';
import mongoose from 'mongoose';
import ucenikRouter from './routers/ucenik.router';
import bodyParser from 'body-parser'
import nastavnikRouter from './routers/nastavnik.router';

const app = express();

app.use(express.json())
app.use(cors())


mongoose.connect('mongodb://127.0.0.1:27017/MojNajdraziNastavnikDatabase')
    
const conn = mongoose.connection
conn.once('open', ()=>{
    console.log("DB ok")
})

const router = express.Router();
router.use('/ucenik',ucenikRouter)
router.use('/nastavnik',nastavnikRouter)



app.use('/' ,router);
app.listen(4000, () => console.log(`Express server running on port 4000`));