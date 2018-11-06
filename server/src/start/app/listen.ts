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

export const listen = ({ server, app, config }: ListenConfig) => {
  const { host = "localhost", port = 4000, log = console.log } = config || {};
  app.listen({ port }, () =>
    log(`🚀 Server ready at http://${host}:${port}${server.graphqlPath}`)
  );
};
