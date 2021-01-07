const fs = require('fs');
let productos = [];

const productController = {
    create: function (req, res) {
        res.render('crearProducto');
    },
    store: function (req, res) {

        let nuevoId = productos.length > 0 ? productos[productos.length - 1].id + 1 : 1; 
        //producto.id = nuevoId;
        let producto = {
            // id: req.body.id,
            id: nuevoId,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            imagen: req.body.imagen,
            categoria: req.body.categoria,
            precio: req.body.precio
        }
       
        
        
        // productos.push(producto, nuevoId);
        productos.push(producto);
       
        res.redirect("/paginadeproducto");
    },
    edit: function (req, res) {
        let id = req.params.id;
        let productoEncontrado = productos.find(function (producto) {
            return producto.id == id;
        });
        if(productoEncontrado){
            return res.render('editarProducto', { producto: productoEncontrado });
        }else{
            return res.send("Producto No Encontrado");
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
           
            res.send("Producto Eliminado");
        } else {
            res.send("Producto No Encontrado");
        }
    }
}

module.exports = productController;

