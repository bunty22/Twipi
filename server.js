const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/tweet');
const path = require('path');

// const __dirname = path.resolve();
dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api", routes);

app.use(express.static(path.join(__dirname, "client", "build")));
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
app.use(express.static("public"));

// if (process.env.NODE_ENV === 'production') {
// 	app.use(express.static("client/build"));

// 	app.get("*", (req, res) => {
// 		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// 	});
// }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on PORT: ${PORT}`));