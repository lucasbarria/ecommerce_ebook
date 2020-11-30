const indexController = {
    home: function(req, res, next) {
        res.render('home');
      },
    productDetail: function(req, res, next) {
        res.render("productDetail");
      },
    iniciasesion: function(req, res, next) {
        res.render("iniciasesion");
      },
    productCart: function(req, res, next) {
        res.render("productCart");
      },
    editar: function(req, res, next) {

      res.render('editarusuario');
    }
}

module.exports = indexController
