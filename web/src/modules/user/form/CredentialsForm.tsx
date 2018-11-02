import * as React from "react";
import { Form } from "./Form";
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
        console.log("onSubmit", { data });
        if (client) {
          await client.resetStore();
        }
        let response;
        if (mutate) {
          response = await mutate({
            variables: data
          });
        }
        console.log({ action: buttonText, response, redirect });
        if (history) {
          history.push(redirect);
        }
      }}
    />
  );
};
