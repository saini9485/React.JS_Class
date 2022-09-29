import React from "react";
import { data, data1 } from "./Parent";
export function Child3() {
  return (
    <data.Consumer>
      {(name) => {
        return (
          <data1.Consumer>
            {(place) => {
              return (
                <h1>
                  hi my name is {name} and place {place}{" "}
                </h1>
              );
            }}
          </data1.Consumer>
        );
      }}
    </data.Consumer>
  );
}
