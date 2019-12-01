import React from "react";
import "./addbutton.css";
function AddButton(props) {
  return (
    <section className="action-row flex">
      <button onClick={props.addFunction} className="action-button flex">
        Add
      </button>
    </section>
  );
}

export default AddButton;
