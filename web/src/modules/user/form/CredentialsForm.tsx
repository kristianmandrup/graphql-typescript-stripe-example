import * as React from "react";
import { Form } from "./Form";
export const CredentialsForm = ({
  history,
  mutate,
  redirect,
  buttonText,
  updater
}: any) => {
  return (
    <Form
      buttonText={buttonText}
      onSubmit={async (data: any) => {
        const response = await mutate({
          variables: data
        });
        console.log(response);
        if (updater) {
          updater();
        }
        history.push(redirect);
      }}
    />
  );
};
