export const createMockedNetworkFetch = (createResponse, { latency }) => (
  data
): Promise<Response> => {
  const settings = {
    latency: latency ? parseInt(latency, 10) : null
  };

  const response: Response = createResponse(JSON.parse(data.body));
  return new Promise(fullfil => {
    if (!settings.latency) {
      return fullfil(response);
    } // resolve immediatelly
    return setTimeout(() => fullfil(response), settings.latency); // simulate network latency
  });
};
