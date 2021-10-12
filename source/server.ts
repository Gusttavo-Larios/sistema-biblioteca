import express, { urlencoded } from 'express'
import mustache from 'mustache-express'
import dotenv from 'dotenv'
//rotas
import rotaPrincipal from './routes'
import path from 'path'

//Configurando váriaveis de ambiente
dotenv.config()

const server = express()

//Configurando template engine
server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, './views'))
server.engine('mustache', mustache())

//Habilitando o acesso há informações enviadas no corpo da requisição
server.use(express.urlencoded({ extended: true }))

server.use("/", rotaPrincipal)

server.listen(process.env.PORTA, () => {
  console.log(`Servidor rodando na porta ${process.env.PORTA}`)
})