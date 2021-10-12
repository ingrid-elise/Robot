import React, { useState, useEffect } from "react";
import "./Grid.css";

function Grid(props) {
  const [robot, setRobot] = useState([0, 0]); // position of robot
  const [command, setCommand] = useState(""); // commands to move robot
  const [isPlaced, setIsPlaced] = useState(false); // state for placing robot
  // const [leftTurn, setLeftTurn] = useState(0);
  // const [leftTransform, setLeftTransform] = useState(0);
  const [turnClass, setTurnClass] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseEnter() {
    setIsHovering(true);
    console.log("hovering - show description");
  }

  function handleMouseLeave() {
    setIsHovering(false);
    console.log("not hovering - hide description");
  }

  useEffect(() => {
    console.log("component updated!"); // when component updates, checks if robot is outside of grid
    checkIfOutOfGrid();
  });

  const handleChange = (ev) => {
    // updates command from input field on change
    setCommand(ev.target.value);
  };

  const robotCommand = () => {
    // robot commands which update
    switch (command) {
      case "PLACE":
      case "place":
        setIsPlaced(true);
        console.log("PLACE command");
        break;
      case "MOVE":
        // setRobot((prev) => [prev[0], prev[1]]);
        console.log("MOVE command");
        break;
      case "REPORT":
        // setRobot((prev) => [prev[0], prev[1]]);
        console.log("REPORT command");
        break;
      case "LEFT TURN":
      case "left turn":
        setTurnClass("rotateLeft"); // css class
        console.log("LEFT TURN command");
        break;
      case "RIGHT TURN":
      case "right turn":
        setTurnClass("rotateRight"); // css class
        console.log("RIGHT TURN command");
        break;
      case "LEFT":
      case "left":
        setRobot((prev) => [prev[0], prev[1] - 110]);
        console.log("MOVE LEFT command");
        break;
      case "RIGHT":
      case "right":
        setRobot((prev) => [prev[0], prev[1] + 110]);
        console.log("MOVE RIGHT command");
        break;
      case "UP":
      case "up":
        setRobot((prev) => [prev[0] + 110, prev[1]]);
        console.log("MOVE UP command");
        break;
      case "DOWN":
      case "down":
        setRobot((prev) => [prev[0] - 110, prev[1]]);
        console.log("MOVE DOWN command");
        break;
      default:
    }
  };

  const checkIfOutOfGrid = (e) => {
    // checks if robot is outside of grid = resetRobot function
    if (robot[0] >= 550 || robot[1] >= 550 || robot[0] < 0 || robot[1] < 0) {
      resetRobot();
    }
  };

  const resetRobot = (e) => {
    // reset postion of robot state to start position
    setRobot([0, 0]);
    console.log("Game resetted");
  };

  return (
    <div>
      <div className="display">
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div>showing</div>
        </div>
        <div
          className={`
        ${isHovering ? "" : "hidden"}
      `}
        >
          <div className="commands">
            <p className="commandTitle">COMMANDS</p>

            <div className="commandsText">
              <p>'PLACE'</p>
              <p>Places Aki the robot on the grid</p>
              <p>'UP', 'DOWN', 'LEFT', 'RIGHT'</p>
              <p>Moves Aki the robot around the grid</p>
            </div>
          </div>
        </div>
        <div className="game">
          <img
            className={
              isPlaced ? `displayRobot ${turnClass}` : `robot ${turnClass}` // turnery opperator. returns displayRobot is true and robot if false.
            } // if/else statement for classes
            src="images/robot.png"
            alt="toy-robot"
            style={{
              bottom: robot[0], // start position of robot
              left: robot[1],
            }}
            robot={robot} // robot state
          />
          <div className="game-cell"></div>
          <div className="game-cell"></div>
          <div className="game-cell"></div>
          <div className="game-cell"></div>
          <div className="game-cell"></div>
          <div className="game-cell"></div>
          <div className="game-cell"></div>
          <div className="game-cell"></div>
          <div className="game-cell"></div>
          <div className="game-cell"></div>
          <div className="game-cell"></div>
          <div className="game-cell"></div>
          <div className="game-cell"></div>
          <div className="game-cell"></div>
          <div className="game-cell"></div>
          <div className="game-cell"></div>
          <div className="game-cell"></div>
          <div className="game-cell"></div>
          <div className="game-cell"></div>
          <div className="game-cell"></div>
          <div className="game-cell"></div>
          <div className="game-cell"></div>
          <div className="game-cell"></div>
          <div className="game-cell"></div>
          <div className="game-cell"></div>
        </div>
      </div>
      <input
        type="text"
        name="controls"
        className="inputField"
        placeholder="Where to next...?"
        value={command}
        onChange={handleChange}
      />
      <button className="button" onClick={robotCommand}>
        GO
      </button>
      {/* <div onChange={setCommand}>onChange</div> */}
    </div>
  );
}

export default Grid;
