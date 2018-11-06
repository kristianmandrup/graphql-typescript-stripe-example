import * as express from "express";
import { createSession } from "./session";
import { addCors } from "./cors";
import { listen } from "./listen";
import { createServer } from "./server";

export { createServer };

export const createApp = server => {
  const app = express();
  createSession(app);
  addCors(app);
  listen({ app, server });
};
