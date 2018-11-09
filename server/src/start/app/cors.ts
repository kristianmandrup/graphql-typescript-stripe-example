import { createServer } from "./server";
export const addCors = (app: any) => {
  createServer().applyMiddleware({
    app,
    cors: {
      credentials: true,
      origin: "http://localhost:3000" // TODO: read from process env
    }
  }); // app is from an existing express app
};
