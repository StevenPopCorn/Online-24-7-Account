const express = require("express");
const server = express();

server.all("/", (req, res) => {
  res.send("Your account is online 24/7!");
});

function keepAlive() {
  server.listen(3000, () => {
    console.log("Yo bro! your account has online 24/7!.Tips: Use uptimerobot to hosting your account!");
  });
}

module.exports = keepAlive;