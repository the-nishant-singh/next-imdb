import React from "react";

const Results = ({ data = [] }) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.original_title}</div>
      ))}
    </div>
  );
};

export default Results;
