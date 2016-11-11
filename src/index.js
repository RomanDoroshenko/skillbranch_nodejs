import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.get('/task2B',(req, res) => {

	res.send(canonize(req.query.fullname));
});

app.listen(8080, () => {
  console.log('Your app listening on port 8080!');
});


// Canonization func

function canonize(fullname){
    var re =  /\d/;
    var output = "";

	if(!fullname || (re.test(fullname))){
		output = "Invalid fullname";
		return output;
	}

	

	fullname = fullname.split(" ");

	if(fullname.length > 3 || fullname.length < 1) {
		output += "Invalid fullname";
		return output;
	}

	output += fullname[fullname.length - 1] + " ";
	fullname.pop();
	

	for (var prop in fullname) {

	output += fullname[prop].slice(0,1) + ". ";

	}

	
	return output.trim();
    console.log(output);
}

