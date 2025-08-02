import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Circle } from "./Circle/Circle";

function App() {
  const [activeCircle, setActiveCircle] = useState<string>("red");

const redCircleRef = useRef<HTMLDivElement>(null)

useEffect(() => {
  if(redCircleRef.current) {
    redCircleRef.current.focus();
  }
}, []);


  const handleCircleClick = (color: string) => {
    setActiveCircle(color);
  };



  return (
    <div className="semaphore-container">
      <div className="semaphore-item">
        <Circle
          ref={redCircleRef}
          color="red"
          active={activeCircle === "red"}
          onClick={() => handleCircleClick("red")}
        />
      </div>
      <div className="semaphore-item">
        <Circle
          color="orange"
          active={activeCircle === "orange"}
          onClick={() => handleCircleClick("orange")}
        />
      </div>
      <div className="semaphore-item">
        <Circle
          color="green"
          active={activeCircle === "green"}
          onClick={() => handleCircleClick("green")}
        />
      </div>
    </div>
  );
}

export default App;
