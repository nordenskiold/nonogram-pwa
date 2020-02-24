import React, { useEffect } from "react";
import style from "./nonogram.css";

const Nonogram = ({ rows }) => {
  const shouldDraw = true;
  const handleClick = (i, j) => event => {
    console.log(i, j);
    event.target.style.background = "black";
    console.log(event);
  };
  useEffect(() => {
    if (shouldDraw) {
      console.log(shouldDraw);
    }
  }, [shouldDraw]);
  // alert(rows);
  console.log(rows);
  return (
    <div className={style.wrapper}>
      <table className={style.nonogram}>
        <tbody>
          {[...Array(rows)].map((e, row) => (
            <tr key={row}>
              {[...Array(rows)].map((f, col) => (
                <td key={col} onClick={e => handleClick(row, col)(e)} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Nonogram;
