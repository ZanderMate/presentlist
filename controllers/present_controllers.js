const db = require("../models");

module.exports = function(app) {

    //GET (show all presents)
    app.get("/api/presents/", (req, res) => {
        db.Presents.findAll()
        .then(result => {
            res.json(result);
        })
    });

    // POST (create new present)
    app.post("/api/presents/", (req, res) => {
        db.Presents.create({
            present_name: req.body.present_name,
            price: req.body.price,
            url: req.body.url
        })
        .then(result => {
            res.send(result);
        });
    })

    //DELETE (delete a present)
    app.delete("/api/presents/:id", (req, res) => {
        db.Presents.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(result => {
            res.json(result);
        })
    })
}