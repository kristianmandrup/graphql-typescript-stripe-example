import * as React from "react";

const styles = {
  fetching: {
    fontSize: 30,
    fontFamily: "Luckiest Guy",
    color: "#17cbc4",
    margin: 10,
    letterSpacing: 1
  }
};

export const Fetching = () => (
  <div>
    <span style={styles.fetching}>Fetching...</span>
  </div>
);
