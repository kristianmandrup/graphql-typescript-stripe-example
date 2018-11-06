import * as React from "react";
import { Form } from "./Form";
const { log } = console;

const createOnSubmit = ({ history, mutate, redirect, client, action }: any) => {
  return async (data: any) => {
    log("onSubmit", { action, data, client });
    if (client) {
      log("client reset store");
      await client.resetStore();
    } else {
      log("missing client to reset store");
    }
    let response;
    if (mutate) {
      log("mutate data", data);
      response = await mutate({
        variables: data
      });
    } else {
      log("missing mutate!!");
    }
    log({ history, response, redirect });
    if (history) {
      log({ redirect });
      history.push(redirect);
    } else {
      log("missing history for redirect");
    }
  };
};

export const CredentialsForm = ({
  history,
  mutate,
  redirect,
  buttonText,
  client
}: any) => {
  const onSubmit = createOnSubmit({
    history,
    mutate,
    redirect,
    client,
    action: buttonText
  });
  return <Form buttonText={buttonText} onSubmit={onSubmit} />;
};
