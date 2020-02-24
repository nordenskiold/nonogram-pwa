import React, { useEffect } from "react";
import Baselayout from "./base";
import Nonogram from "./nonogram";

const Game = () => {
  return (
    <Baselayout>
      <Nonogram rows={5} />
    </Baselayout>
  );
};

export default Game;
