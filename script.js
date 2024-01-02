const express = require('express');
const cors = require('cors');

const app = express();
const router = express.Router();


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(cors());

router.get('/', (req, res) => {
  res.render('pages/index');
});

app.use('/', router);

app.listen(8080, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`Server berjalan di port 8080`);
  }
});