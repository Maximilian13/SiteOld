var express = require('express');
var upload = require("express-fileupload")
var formidable = require('formidable');
var fs = require('fs');

var app = express();
const urlencodedParser = express.urlencoded({extended: false});
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(__dirname)); 
app.use(upload())

app.get('/', function (req, res){
    res.sendFile(__dirname + '/index.html');
});

function upload_file(req, task, new_filename, dir, res) {
    if (!task) return
    var file = task
    var filename = file.name
    console.log(filename)
    file.mv("./"+dir+"/"+new_filename, function(err) {
        if (err) {
            res.send(err)
        }
    })
    res.sendFile(__dirname + '/result.html');
}

app.post('/', function(req, res) {
    if (req.files) {
        if (!req.body.username) {
            return
        }
        if (!req.body.useremail) {
            return
        }
        var dir = "./" + req.body.username + " " + req.body.useremail
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        upload_file(req, req.files.task1, "task1.py", dir, res)
        upload_file(req, req.files.task2, "task2.py", dir, res)
    }
});

app.listen(8000);
console.log('server on 8000');