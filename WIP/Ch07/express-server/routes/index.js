const express = require('express');
const moment = require('moment');

let router = express.Router();

let studentArray = [{
    nameFirst: "Devin",
    nameLast: "Durgan",
    email: "Devin.Durgan@gmail.com",
    hireDate: moment("01/19/2015", "MM/DD/YYYY")
}, {
    nameFirst: "Cristal",
    nameLast: "Adams",
    email: "Cristal.Adams@live.com",
    hireDate: moment("07/29/2016", "MM/DD/YYYY")
}, {
    nameFirst: "Nettie",
    nameLast: "McGlynn",
    email: "Nettie.McGlynn@gmail.com",
    hireDate: moment("08/29/2015", "MM/DD/YYYY")
}];


router.get('/', (req, res) =>{
    res.render('index', {
        students:studentArray
    });
});

router.get('/about', (req, res) =>{
    res.render('about');
});

router.get('/class', (req, res) =>{
    res.render('class', {
        students:studentArray
    });
});

router.get('/weather', (req, res) =>{
    let num1 = Math.random()*100;
    let num2 = Math.random()*100;

    let high =0;
    let low=0;
    if(num1>num2){
        high=num1;
        low=num2;
    }else{
        high=num2;
        low=num1;
    }
    res.send(`The High for today is ${high.toString()} and the low is ${low.toString()}`);
});

module.exports = router;