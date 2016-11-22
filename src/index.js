import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});


app.get('/task2C',(req, res) => {

	res.send(canonize(req.query.username));
	console.log(req.query.username);
});

app.listen(8080, () => {
  console.log('Your app listening on port 8080!');
});



// Canonization func

function canonize(name){

    var re = /@|((\w+?:)?(\/+)?(\w+)?(\.\w+){1,2}?\/)|\?.+/gi,
        username;

	if(!name) return 'invalid username';

	username = name.replace(re,"");

	return "@" + username;
}

