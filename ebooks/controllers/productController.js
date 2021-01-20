const fs = require('fs');
const db = require('../dataBase/models');

const productController = {
    create: function (req, res) {
        res.render('crearProducto');
    },
    store: function (req, res) {

        //let nuevoId = productos.length > 0 ? productos[productos.length - 1].id + 1 : 1; 
        //producto.id = nuevoId;
        db.products.create({
            // id: req.body.id,
            nombre: req.body.nombre,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
            imagen: req.body.imagen,
            categoria: req.body.categoria 
        }).then(function (product){
            res.render('home')
        });
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

