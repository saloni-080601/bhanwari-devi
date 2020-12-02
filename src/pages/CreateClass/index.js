import React, { useState } from "react";
import CreateClassComponent from "../../components/Class";
import "../../components/Class/styles.scss";


function CreateClass() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <button
      className="addClassButton"
       onClick={handleClickOpen}
        style={{
          backgroundColor: "green",
          width: "10%",
          height: "35px",
          color: "white",
        }}
      >
        Classes
      </button>
      {open ? (
        <CreateClassComponent />
      ) : 
      null}
    </div>
  );
}

export default CreateClass;
