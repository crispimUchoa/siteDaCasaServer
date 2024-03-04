import  express  from "express";
import { router } from "./routes";
import {sequelize} from './database'

const PORT = process.env.PORT || 3000
const app = express()

app.use(express())
app.use(router)

app.listen(PORT, ()=>{
    sequelize.authenticate().then(()=>{
        console.log('Conectado ao banco de dados.')
    })
})

app.listen(PORT, ()=>{
    console.log('Rodando o servidor')
})