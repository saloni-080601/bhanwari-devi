import React from "react";
import Pathways from "..";
import Common from "../Common";

function PythonCourse({ pathwayId }) {
  const number = "1";
  console.log("pathwayId in PythonCourse", pathwayId);
  return (
    <>
      <Common pathwayId={pathwayId} />
      {/* <Pathways /> */}
    </>
  );
}

export default PythonCourse;
