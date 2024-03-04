import  express  from "express";
import { router } from "./routes";
import {sequelize} from './database'
const app = express()

const PORT = process.env.PORT || 3000

app.use(express.static('public'))
app.use(router)
app.use(express.json())


app.listen(PORT, ()=>{
    sequelize.authenticate().then(()=>{
        console.log('Conectado ao banco de dados.')
    })
    console.log('Rodando o servidor')
})

