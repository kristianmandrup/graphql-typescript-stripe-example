import * as React from "react";
import { useState } from "react";
import { Products } from "./products";
import { Plans } from "./plans";
import { Tabs, Tab } from "@material-ui/core";

export const Admin = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleChange = (_, value) => {
    setTabIndex(value);
  };
  return (
    <Tabs value={tabIndex} onChange={handleChange}>
      <Tab label="Products">
        <Products />
      </Tab>
      <Tab label="Plans">
        <Plans />
      </Tab>
    </Tabs>
  );
};
