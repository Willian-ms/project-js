import express from "express"
import routes from "./routes.js"
import db from "./src/db.js"

const PORT = process.env.PORT || 3001

const app = express()

//teste react
app.get("/api", (req,res) =>{
  res.json({message:"opaaa"})
});
//

app.use(express.json())
app.use(routes)


db.sync( ()=> console.log(`Conectado: ${process.env.DB_NAME}`))

app.listen(PORT, ()=>{
 console.log("comecooooooou")
})