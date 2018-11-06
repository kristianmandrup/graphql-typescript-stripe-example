import { connectDb } from "./connect-db";
import { createApp, createServer } from "./app";

export const start = async () => {
  connectDb();
  const server = createServer();
  createApp(server);
};
