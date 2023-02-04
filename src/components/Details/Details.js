import React from "react";

import classes from "./Details.module.scss";

const Details = ({ clickDetails }) => {
  return (
    <div className={classes.details}>
      <span>
        Selected node:{" "}
        <span className={clickDetails.selectedNode ? classes.value : null}>
          {clickDetails.selectedNode || "..."}
        </span>
      </span>
      <span>Children: {!clickDetails.children.length ? "..." : ""}</span>
      <ul>
        {clickDetails.children.map((i, idx) => (
          <li key={idx} className={classes.value}>
            {i.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Details;
