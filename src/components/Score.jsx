import React from "react";
const queryString = require("query-string");

const Score = (props) => {
  const { totalScore } = queryString.parse(props.location.search);

  return (
    <React.Fragment>
      <div className="card bg-info text-light">
        <div className="card-body" style={{ margin: "0 auto" }}>
          Your Score # {totalScore} %
        </div>
      </div>
    </React.Fragment>
  );
};

export default Score;
