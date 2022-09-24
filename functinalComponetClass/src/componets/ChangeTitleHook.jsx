// import React, { useState, useEffect } from "react";

// export function TitleChangeHooks() {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("");

//   const changeCount = () => {
//     setCount((prev) => prev + 1);
//   };

//   //   useEffect(() => {
//   //     // for the first time load(rendering process)
//   //     // for each re-rendering process my useEffect will get called
//   //     // only if I change any state or props
//   //     // DOM change
//   //     // API - fetch, setinterval(), setTimeout(), promises,
//   //     //   console.log("hooks calling");
//   //     //   document.title = `${count} times clicked`;
//   //     setInterval(changeCount, 1000);
//   //   }, []);
//   // [] -> componentDidMount()

//   //   useEffect(() => {
//   //     console.log("hooks calling");
//   //     document.title = `${count} times clicked`;
//   //   });

//   //   useEffect(() => {
//   //     console.log("hooks calling -> count changed");
//   //     document.title = `${count} times clicked`;
//   //   }, [count]);

//   //   useEffect(() => {
//   //     console.log("name changed");
//   //   }, [name]);

//   return (
//     <>
//       {/* <input
//         type="text"
//         onChange={(e) => setName(e.target.value)}
//         value={name}
//       /> */}
//       <p>{count}</p>
//       {/* <button onClick={() => setCount((prev) => prev + 1)}>
//         click - {count} hooks
//       </button> */}
//     </>
//   );
// }


import React, { useState, useEffect } from 'react';

export function ChngeTitleHook() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}