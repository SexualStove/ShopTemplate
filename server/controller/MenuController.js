const {Menu} = require('../models');


module.exports = {
    async createMenu (req, res) {
        const fs = require('fs');

        fs.writeFile("/tmp/test", req.body, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    },


};