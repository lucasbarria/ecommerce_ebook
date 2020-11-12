const productController = {
    crearProducto : function (req, res) {
        res.render('crearProducto');
    },
    create: function (req, res) {
        let producto = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            imagen: req.body.img,
            categoria: req.body.categoria,
            precio: req.body.precio
        } //tomar json de producto
        //convertirlo a js
        //pushear nuevo producto
        //convertirlo a json
        //sobrescribir el json
        res.send ('producto creado')
    } 
}

module.exports = productController;

