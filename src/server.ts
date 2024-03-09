import  express  from "express";
import { router } from "./routes";
import {sequelize} from './database';
import cors from 'cors';

const app = express()
app.use(cors())
const PORT = process.env.PORT ? process.env.PORT : 3000

app.use(express.static('public'))
app.use(express.json())
app.use(router)


app.listen(PORT, ()=>{
    sequelize.authenticate().then(()=>{
        console.log('Conectado ao banco de dados.')
    })
    console.log('Rodando o servidor')
})

