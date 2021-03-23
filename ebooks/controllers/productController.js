const db = require('../dataBase/models');
const products = require('../dataBase/models/products');

const productController = {
    create: function (req, res) {
        res.render('productCreate');
    },
    store: function (req, res, next) {

        console.log(req)
        db.products.create({
            name: req.body.name,
            price: req.body.price,
            descripction: req.body.description,
            image: req.files[0].filename,
            category: req.body.category,
            editorial: req.body.editorial,
        },
        {
            limit: 4
        }).then(function (product){

            console.log(product)
            res.redirect('/')
        });
        console.log(products.image)
    },
    edit: function (req, res) {
        db.products.findByPk(req.params.id)
        .then(function(product){
            res.render('productEdit', {product: product});
        })

        /* let id = req.params.id;
        let productoEncontrado = productos.find(function (producto) {
            return producto.id == id;
        });
        if(productoEncontrado){
            return res.render('editarProducto', { producto: productoEncontrado });
        }else{
            return res.send("Producto No Encontrado");
        }  */
    },
    update: (req, res) => {
        db.products.update({
            name: products.name,
            descripction: products.description,
            image: products.image,
            category: products.category,
            price: products.price
        },
        {
            where: {
                id: req.params.id
            }
        }).then(function(product) {
            res.send('funciona');
        });
        /* let datosActualizados = req.body;
        let arrayNuevo = productos.map(function(producto){
                if(producto.id == req.params.id){
                producto = {
                    id: req.params.id,
                    ...datosActualizados,
                }
            }
            return producto;
        });
        
        return res.redirect('/paginadeproducto'); */
    },
    delete: (req, res) => {


        db.products.destroy({
            where: {id: req.params.id}
            .then(function(products) {
                res.render('home');
            })
        })


       /*  let id = req.params.id;
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
        } */
    },
    detail: function(req, res){
        db.products.findByPk(req.params.id)
                 .then(function(products){
                   return  res.render('productDetail', {products: products});
        })
    },
    list: function(req,res) {
        res.render('productlist');
      }
    
}

module.exports = productController;

