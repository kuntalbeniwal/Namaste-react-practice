const heading = React.createElement("div", {id : "Parent"},
[React.createElement("div", {id : "child1"},
React.createElement("h1", {},"Hello world from react")),
React.createElement("div", {id : "child2"},
React.createElement("h1", {},"Hello world from react"))]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);