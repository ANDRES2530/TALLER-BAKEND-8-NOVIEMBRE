let express=require('express');
let cors=require('cors');

let router=require('./routes/PruebaRoutes');
let router=require('./routes/UsuariosRoutes')

const app=express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.use('/prueba',router);
app.use('/usuarios',router);


app.listen(PORT,()=>{
    console.log("servicio en ejecucion" + PORT)
})
