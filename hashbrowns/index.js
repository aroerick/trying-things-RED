const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");

const app = express();
const PORT = 3004;

const users = {};
app.use(bodyParser.json());

app.post("/signup", async (req, res) => {
  if (req.body.pass && req.body.uname) {
    try {
      const hashedpw = await bcrypt.hash(req.body.pass, 4);
      users[req.body.uname] = {
        pass: hashedpw
      };
      console.log(users)
      res.status(200).send({ ok: true });
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  } else {
    res.sendStatus(500);
  }
});

app.post("/login", async (req, res) => {
  if (req.body.pass && req.body.uname) {
    try {
      const valid = await bcrypt.compare(req.body.pass, users[req.body.uname].pass) ;
      if (valid) {
        res.status(200).send({ message: `Welcome, ${req.body.uname}` });
      } else {
        res.status(418).send({message: 'fuck off mate'});
      }
    } catch (e) {
      res.sendStatus(500);
    }
  }
});

app.listen(PORT, () => {
  console.log(`server running on PORT: ${PORT}`);
});
