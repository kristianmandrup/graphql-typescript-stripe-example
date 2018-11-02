import * as React from "react";
import { Form } from "./Form";
const { log } = console;

export const CredentialsForm = ({
  history,
  mutate,
  redirect,
  buttonText,
  client
}: any) => {
  return (
    <Form
      buttonText={buttonText}
      onSubmit={async (data: any) => {
        log("onSubmit", { data });
        if (client) {
          await client.resetStore();
        }
        let response;
        if (mutate) {
          response = await mutate({
            variables: data
          });
        }
        log({ action: buttonText, response, redirect });
        if (history) {
          history.push(redirect);
        }
      }}
    />
  );
};
