const http = require("http");

require("dotenv").config();

const app = require("./app/app");
//create server
const server = http.createServer(app);

//graph PORT on .env
const PORT = process.env.PORT || 8000;

// listening to server according to port
server.listen(PORT, () => {
  console.log("Server IS running", PORT);
});
