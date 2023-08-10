import React from "react";

function App() {
  const divStyle = {
    color: 'red',
    backgroundColor: 'powderblue',
    fontSize: 'larger',
    padding: '3px',
  }
return (
  <div>
    <div style={divStyle}>Hello React</div>
    <div style={divStyle}>Hello React Native</div>
  </div>  
)
}

export default App;
