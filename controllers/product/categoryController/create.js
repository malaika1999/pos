const Category = require('../../../models/product/category.js');

exports.createCategory =  (req, res) => {
    if(!req.body.name) {
        return res.status(400).send({
          message: "category name  cannot be empty"
        });
      }
    let category = new Category({
        name: req.body.name,
    })
    category.save()
    .then(data => {
        res.send(data);
    }).catch(err =>{
            res.status(500).send({
                message:"couldn't create category"
            })
    })
}