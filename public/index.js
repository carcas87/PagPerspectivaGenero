//traer expreess al proyecto
const express = require('express'); 
//instanciar servr de express
const app = express();

app.use(express.static('./public'));//inidca el lugar de los archivos estaticos
app.use(express.static('./public/html'));//inidca el lugar de los archivos estaticos html
//cuando entres ala raiz del sitio (http://localhost)...  ****
app.get('/', ( req,res)=>{   
    res.render("./html/index.html")//se lanzar la pagina index .html que sta en html
  
})



// se pone el sevr a escuchar
app.listen(3000, () => {
    console.log("serv en el port 3000")
})

console.log("hola wey  XDXD")