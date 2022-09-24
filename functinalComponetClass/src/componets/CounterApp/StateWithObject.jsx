import React, { useState } from "react";

export function StateWithObject() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });

  return (
    <>
      <form>
        <div>
          <label htmlFor="">First Name</label>
          <input
            type="text"
            id="fname"
            onChange={(e) => {
              setName({ ...name, firstName: e.target.value });
            }}
            value={name.firstName}
          />
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            id="lname"
            onChange={(e) => {
              setName({ ...name, lastName: e.target.value });
            }}
            value={name.lastName}
          />
        </div>
        <p>
          my first name is {name.firstName}. my last name is {name.lastName}
        </p>
        <p>{JSON.stringify(name)}</p>
      </form>
    </>
  );
}