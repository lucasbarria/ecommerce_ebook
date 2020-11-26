const fs = require('fs');
var productos = fs.readFileSync("./database/products.json");
productos = JSON.parse(productos);

const productController = {
    create: function (req, res) {
        res.render('crearProducto');
    },
    store: function (req, res) {
        let producto = {
            id: req.body.id,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            imagen: req.body.imagen,
            categoria: req.body.categoria,
            precio: req.body.precio
        }

        /*
        let nuevoId = productos.length > 0 ? productos[productos.length - 1].id + 1 : 1; 
        producto.id = nuevoId;
        */

        productos.push(producto);
        let productosJSON = JSON.stringify(productos,null,2);
        fs.writeFileSync("./database/products.json", productosJSON);
<<<<<<< HEAD
<<<<<<< HEAD
        res.redirect('/products/crearproducto')
=======
<<<<<<< HEAD
        res.redirect("/paginadeproducto");
=======
        res.redirect('/products/editar');
>>>>>>> c77d79eea217abb4ab17cdf465755397bcf2970e
>>>>>>> 948c91a571c6ef7cbe8c2860d36a06d37d00635a
=======
        res.redirect("/paginadeproducto");
>>>>>>> 2b75cbadeedf852293cae1c43d0f32af5d7d7903
    },
    edit: function (req, res) {
        let id = req.params.id;
        let productoEncontrado = productos.find(function (producto) {
            return producto.id == id;
        });
        if(productoEncontrado){
            return res.render('editarProducto', { producto: productoEncontrado });
        }else{
            return res.render('productoNoEncontrado');
        }
    },
    update: (req, res) => {
        let datosActualizados = req.body;
        let arrayNuevo = productos.map(function(producto){
                if(producto.id == req.params.id){
                producto = {
                    id: req.params.id,
                    ...datosActualizados,
                }
            }
            return producto;
        });
        fs.writeFileSync("./database/products.json",JSON.stringify(arrayNuevo,null,2));
        return res.redirect('/paginadeproducto');
    },
    delete: (req, res) => {
        let id = req.params.id;
        let productoEncontrado = productos.find(function (producto) {
            return producto.id == id;
        });
        if (productoEncontrado){
          let productoNoEliminado = productos.filter(function (producto){
              return producto.id != id;
            });
            productoEliminadoJSON = JSON.stringify(productoNoEliminado);
            fs.writeFileSync("./database/products.json", productoEliminadoJSON);
            res.send("producto eliminado");
        } else {
            res.send("producto no encontrado");
        }
    }
}

module.exports = productController;

