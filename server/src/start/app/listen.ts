type Config = {
  host?: string;
  port?: number;
  log?: any;
};

type ListenConfig = {
  server: any;
  app: any;
  config?: Config;
};

export const listen = async ({ server, app, config }: ListenConfig) => {
  const { host = "localhost", port = 4000, log = console.log } = config || {};
  await app.listen({ port });
  log(`🚀 Server ready at http://${host}:${port}${server.graphqlPath}`);
  return app;
};
