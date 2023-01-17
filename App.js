import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",
    {
        id: "h1 id",
    },
    "Hello from React!");

    const header2 = React.createElement("h2",{},"header 2 ");
    const header3 = React.createElement("h2",{},"header 2 ");
    const container = React.createElement("div",{id:"container"},[header2, header3])
    console.log(heading);
    const root = ReactDOM.createRoot(document.getElementById("root"));

    //parsing a react element inside the root
    //root.render(heading);
    root.render(container);