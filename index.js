import express from "express"
import db from "./models/index.js"
import routes from "./routes/index.js"


const app = express();
db.sequelize.sync();

routes(app)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});