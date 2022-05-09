const express = require('express');
const app = express()
const harrow =require ('./data/Harrow.json')
const heathrow = require('./data/Heathrow.json');
const stratford = require('./data/Stratford.json')

const allCity = { harrow, heathrow, stratford };
console.log(allCity)

app.get("/pharmacies", (req, res) => {
    res.send(stratford.pharmacies);   
});
app.get("/colleges", (req, res) => {
  res.send(stratford.colleges);
});

app.get("/doctors", (req, res) => {
  res.send(stratford.doctors);
});

app.get("/hospitals", (req, res) => {
  res.send(stratford.hospitals);
});


app.get("/:city/pharmacies", (req, res) => {
    const city = req.params.city;
    res.send(allCity[city].pharmacies);
});
app.get("/:city/colleges", (req, res) => {
  const city = req.params.city;
  res.send(allCity[city].colleges);
});
app.get("/:city/doctors", (req, res) => {
  const city = req.params.city;
  res.send(allCity[city].doctors);
});
app.get("/:city/hospitals", (req, res) => {
  const city = req.params.city;
  res.send(allCity[city].hospitals);
});

app.listen(4000, () => console.log('App running on port:4000'))