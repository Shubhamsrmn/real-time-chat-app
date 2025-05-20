import http from "http";
import app from "./app.js";
import connectDb from "./db/index.js";

connectDb();

const server = http.createServer(app);

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
