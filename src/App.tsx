import { useState } from "react";
import "./App.css";
import { Circle } from "./Circle/Circle";

function App() {
  const [activeCircle, setActiveCircle] = useState<string>("red");

  const handleCircleClick = (color: string) => {
    setActiveCircle(color);
  };

  return (
    <div className="semaphore-container">
      <div className="semaphore-item">
        <Circle
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
