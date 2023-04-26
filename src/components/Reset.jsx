import React from "react";

export default function Reset({ setCounter }) {
  return (
    <div
      className="reset"
      onClick={() => {
        setCounter(0);
      }}
    >
      Reset
    </div>
  );
}
