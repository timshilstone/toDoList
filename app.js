const express = require('express')
const bodyParser = require('body-parser')
const date = require(__dirname + '/date.js')

const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))

const items = ['Buy Food','Cook Food','Eat Food'];


app.get('/', function(req, res) {
  const day = date.getDate()
  res.render('list', {typeOfDay: day, newListItem: items});
});


app.post('/', function(req, res) {
  const item = req.body.newValue
  items.push(item)
  res.redirect('/')
});


app.listen(3000, function() {
  console.log('Server is live on port 3000')
})
