const fs = require('fs');
var productos = fs.readFileSync("./database/products.json");
productos = JSON.parse(productos);

const productController = {
    crearProducto : function (req, res) {
        res.render('crearProducto');
    },
    create: function (req, res) {
        let producto = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            imagen: req.body.imagen,
            categoria: req.body.categoria,
            precio: req.body.precio
        } 
        productos.push(producto);
        let productosJSON = JSON.stringify(productos)
        fs.writeFileSync("./database/products.json", productosJSON);
        res.redirect ('/products/crearproducto')
    },
    edit: function (req,res) {
        
    }
}

module.exports = productController;

