import * as React from "react";
import { useState } from "react";
import { Products } from "./Products";
import { Plans } from "./Plans";
import { Typography, Tabs, Tab } from "@material-ui/core";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

export const Admin = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleChange = (_, value) => {
    setTabIndex(value);
  };
  return (
    <>
      <Tabs value={tabIndex} onChange={handleChange}>
        <Tab label="Products" />
        <Tab label="Plans" />
      </Tabs>
      {tabIndex === 0 && (
        <TabContainer>
          <Products />
        </TabContainer>
      )}
      {tabIndex === 1 && (
        <TabContainer>
          <Plans />
        </TabContainer>
      )}
    </>
  );
};
