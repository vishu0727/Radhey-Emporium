var url = require("url");
var fs = require("fs");
var mailsender = require('mailsender');
var express = require("express");
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();

app.use(express.static("./public"));

var server = app.listen(3000, function () {
    console.log("Server running at port 3000");
});

app.get("/", function (req, res) {
    res.send(__dirname + "/public/" + "index.html");
});

app.post("/submitDetails", urlencodedParser, function (req, res) {
    var newCustomerObject;
    var d = new Date();
    d = d.toDateString();
    // console.log(req.body);
    var customerObject = req.body;
    // console.log(details);
    // console.log(typeof details)
    var contents = fs.readFileSync(__dirname + "/public/customers.json");
    var jsonContent = JSON.parse(contents);
    // console.log(jsonContent);//It is an array here
    var length = jsonContent.length;
    var index = -1;
    // console.log(jsonContent[0].contact);
    // console.log(jsonContent[0].name);
    for (var i = 0; i < length; i++) {
        if (customerObject.contact == jsonContent[i].contact && customerObject.name.toUpperCase() == jsonContent[i].name) {
            index = i;
            break;
        }
    }

    if (index > 0) {
        newCustomerObject = jsonContent[index];
        var _bought = {
            product: customerObject.product.toUpperCase(),
            price: customerObject.price,
            company: customerObject.company.toUpperCase(),
            barCode: customerObject.barCode,
            purchaseDate : d
        };
        newCustomerObject.bought.push(_bought);
        jsonContent.splice(index, 1);
    } else {
        newCustomerObject = {
            name: customerObject.name.toUpperCase(),
            contact: customerObject.contact,
            email: customerObject.email || "NA",
            bought: [
                {
                    product: customerObject.product.toUpperCase(),
                    price: customerObject.price,
                    company: customerObject.company.toUpperCase(),
                    barCode: customerObject.barCode,
                    purchaseDate : d
                }
            ]
        };
    }
    jsonContent.push(newCustomerObject);
    var newFileArray = JSON.stringify(jsonContent);
    var filepath = __dirname + "/public/customers.json";
    fs.truncate(filepath, 0, function (err) {
        if (err) {
            return console.error(err);
        }
        fs.writeFile(filepath, newFileArray, function (err) {
            if (err) {
                return console.error(err);
            }
        });

    });
    res.sendFile(__dirname + "/public/" + "index.html");
});

// app.post("/detailsSubmit", urlencodedParser, function (req, res) {

//     //Mail sending code working fine
//     // mailsender
//         // .from('emporium.sims@gmail.com', 'KunalGupta2K17')
//         // .to('vishu27brilliant@gmail.com')
//         // .body('Hello', '<h1>Thank you</p>', true)
//         // .send();
//     // console.log("Mail sent");
//     // response = {
//     //     email: req.body.email,
//     //     password: req.body.pwd
//     // };
//     // console.log(response);
//     res.sendFile(__dirname + "/public/" + "customerDetails.html");
// });
