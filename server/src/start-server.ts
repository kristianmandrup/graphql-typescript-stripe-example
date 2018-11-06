import { connectDb } from "./start/connect-db";
import { createApp, createServer } from "./start/app";

export const startServer = async () => {
  await connectDb();
  const server = createServer({
    mockEntireSchema: true
  });
  createApp(server);
};
