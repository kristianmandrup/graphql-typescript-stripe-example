import * as React from "react";
import { useState } from "react";
import { Tabs, Tab, Typography } from "@material-ui/core";
import { display } from "../../plan";
const { Query } = display;

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

export const Home = (props: any) => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleChange = (_, value) => {
    setTabIndex(value);
  };
  return (
    <div>
      <Tabs value={tabIndex} onChange={handleChange}>
        <Tab label="Home" />
        <Tab label="Plans" />
      </Tabs>
      {tabIndex === 0 && <TabContainer>Home</TabContainer>}
      {tabIndex === 1 && (
        <TabContainer>
          <Query admin={false} />
        </TabContainer>
      )}
    </div>
  );
};
