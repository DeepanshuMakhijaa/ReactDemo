import React from "react";
import ReactDom from "react-dom/client";


const heading1Componant = function () {
  return (<>
    <h1>This is heading 1...</h1>
  </>)
}

const Heading2Componant = (props) => {
  return <>
    <h1>This is heading 2...,  Name: {props.name}, Age: { props.Age}, Class: { props.Class}, nxt prop:{props.ram} </h1>
  </>
}
const Heading3Componant = (props) => {
  return <>
    <h1>This is heading 3...,  Name: {props.name}, Age: { props.Age}, Class: { props.Class} </h1>
  </>;
}
const Maindivfunction = () => {
  return (
    <React.Fragment>
      {
        // we can write here any valid JS
      }
      <div>This is main div   {heading1Componant() } </div>                    {/* this is JSX */}
      <div>This is same level div like main div 1<Heading2Componant name="NDIV1" Class="Cdiv1" Age="10" ram="Shyam"/></div>  {/* this is JSX */}
      <div>This is same level div like main div 2<Heading3Componant name="NDIV2" Class="Cdiv2" Age="20" /></div>  {/* this is JSX */}
    </React.Fragment>)
}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Maindivfunction />);