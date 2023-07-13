import React from "react";
import ReactDom from "react-dom/client";

const main = React.createElement(
  "h3",
  { id: "headingMain" },
  "This is Heading tag"
);

const Mfunction = function(){
  return (<>
  <div>Div1 Test</div>
  <div>Div2 Test</div>
  </>)
}

const Mfunction2 = () => {
  return <>
    <div>Div3 Test</div>
    <div>Div4 Test</div>
  </>;
}
const Finalfunction = () => {
  return( 
  <>
  <Mfunction/>
  <Mfunction2/>
  </>)
}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Finalfunction />);