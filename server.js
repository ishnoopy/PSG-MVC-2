import Express from 'express';
import bodyParser from 'body-parser';
import router from './config/routes.js'; // Make sure to include the file extension
//DOCU: loads the content of .env into process.env
import dotenv from 'dotenv';
dotenv.config();

const app = Express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use the imported 'Express' object for the static middleware
app.use(Express.static(process.cwd() + '/assets'));

app.use('/', router);

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
