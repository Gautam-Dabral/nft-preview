import React from "react";
import Image from "./Image";
import Content from "./Content";
import Details from "./Details";
import Credit from "./Credit";

function App() {

  const [imageState, setImageState] = React.useState(false)

  const handleMouseOver = () => {
    setImageState(true)
  }
  const handleMouseOut = () => {
    setImageState(false)
  }

  return (
    <div className="container">
      <Image handleMouseOver={handleMouseOver} handleMouseOut={handleMouseOut} imageState={imageState} />
      <Content />
      <Details />
      <Credit />
    </div>
  );
}

export default App;
