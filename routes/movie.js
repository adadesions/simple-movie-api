var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send("Welcome to Movie-API")
});

router.get('/:movieName', function(req, res, next) {
    let dataPath = `public/data/2014/${req.params.movieName}.json`
    
    if(fs.existsSync(dataPath)) {
        let data = fs.readFileSync(dataPath, 'utf8')
        data = JSON.parse(data)
        res.json(data)
    }
    else {
        res.json({
            status: 404,
            msg: "Movie file not found"
        })
    }
    
});

router.get('/:movieName/:key', function(req, res, next) {
    let dataPath = `public/data/2014/${req.params.movieName}.json`
    
    if(fs.existsSync(dataPath)) {
        const key = req.params.key;
        let data = fs.readFileSync(dataPath, 'utf8')
        data = JSON.parse(data)
        
        let result = {};
        result[key] = data[key]
        res.json(result)
    }
    else {
        res.json({
            status: 404,
            msg: "Movie file not found"
        })
    }
    
});


module.exports = router;
