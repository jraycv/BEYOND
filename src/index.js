import * as React from "react";
import { render } from "react-dom";

import "./styles.scss";
import NumberEntry from "./NumberEntry";

function Root() {
  const [appState, setAppState] = React.useState("numberEntry");

  return (
    <div className={`container display-${appState}`}>

      <NumberEntry/>

    </div>
  );
}

render(<Root />, document.getElementById("root"));
