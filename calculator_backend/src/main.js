const createCalcController = require("./controllers/calcController");

function bootstrap(express, port) {
  const cors = require("cors");
  const app = express();
  const bodyParser = require("body-parser");

  const allowlist = ["http://localhost:3000", "http://localhost"];
  const corsOptionsDelegate = function (req, callback) {
    let corsOptions;
    if (allowlist.indexOf(req.header("Origin")) !== -1) {
      corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
    } else {
      corsOptions = { origin: false }; // disable CORS for this request
    }
    callback(null, corsOptions); // callback expects two parameters: error and options
  };
  app.use(cors(corsOptionsDelegate));
  app.use(bodyParser.json());
  app.use("/api/calc", createCalcController(express));

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}

(async () => {
  const express = require("express");

  const port = 4000;
  bootstrap(express, port);
})();
