const express = require('express');
const ejs = require('ejs');
const bodyparser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.get('/',(req,res)=>{
	res.render('index');
});

app.listen(PORT,()=>{
	console.log(`Listening at ${PORT}`);
});