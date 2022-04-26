import * as http from "http";
import { app } from "./app";

const port = 5000;
const server = http.createServer(app);

async function startServer() {
  server.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  });
}
startServer();
