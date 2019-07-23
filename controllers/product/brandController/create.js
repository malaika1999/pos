const Brand = require('../../../models/product/brand.js');

exports.createBrand =  (req, res) => {
    if(!req.body.name) {
        return res.status(400).send({
          message: "brand name  cannot be empty"
        });
      }
    let brand = new Brand({
        name: req.body.name,
    })
    brand.save()
    .then(data => {
        res.send(data);
    }).catch(err =>{
            res.status(500).send({
                message:"couldn't create brand"
            })
    })
}