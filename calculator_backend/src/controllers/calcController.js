module.exports = function createCalcController(express) {
  const router = express.Router();
  const fs = require("fs");
  router.post("/save", async (req, res, next) => {
    const result = req.body.result;
    fs.writeFile("result.txt", result, function (err) {
      if (err) return console.log(err);
      console.log("Hello World > result.txt");
    });
    return res.json({
      success: true,
    });
  });

  router.get("/getmem", async (req, res, next) => {
    try {
      const data = fs.readFileSync("result.txt");
      return res.json({
        result: data.toString(),
      });
    } catch (err) {
      console.log(err);
      return res.json({
        result: null,
      });
    }
  });

  return router;
};
