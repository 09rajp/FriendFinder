
var characters = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
    return res.json(characters);
    });

    app.post("/api/friends", function(req, res) {
    

        
    });

};