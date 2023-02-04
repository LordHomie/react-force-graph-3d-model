import React, { useState } from "react";
import Sphere from "./components/Sphere";
import Details from "./components/Details/Details";

import classes from "./App.module.scss";

const App = () => {
  const [clickDetails, setClickDetails] = useState({
    selectedNode: "",
    children: [],
  });

  return (
    <div className={classes["main"]}>
      <span className={classes["header"]}>Микросервисы Держава</span>
      <div className={classes["body"]}>
        <Sphere setClickDetails={setClickDetails} />
        <Details clickDetails={clickDetails} />
      </div>
    </div>
  );
};

export default App;
