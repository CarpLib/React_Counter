import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Reset from "./Reset";
export default function Main({ counter, setCounter }) {
  return (
    <main>
      <div>
        <div className="icon">
          {counter === 0 ? (
            ""
          ) : (
            <FontAwesomeIcon
              icon="minus"
              onClick={() => {
                setCounter(counter - 1);
              }}
            />
          )}
        </div>
        <div className="counter">{counter}</div>
        <div className="icon">
          {counter === 10 ? (
            ""
          ) : (
            <FontAwesomeIcon
              icon="plus"
              onClick={() => {
                setCounter(counter + 1);
              }}
            />
          )}
        </div>
      </div>
      <Reset setCounter={setCounter} />
    </main>
  );
}
