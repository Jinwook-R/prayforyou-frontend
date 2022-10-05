import MapImage from "../assets/map.svg";
import { useEffect, useState } from "react";
import { BREAK_POINT } from "../utils/constants";
import { useMediaQuery } from "react-responsive";

/** Position
 * @field rate : string
 * @field polygon : string (number number, ...)
 * @field placeType : string
 *   - used as Position Id and Position name
 * @field positions
 */

/** PositionWithPoint extends Position
 * @field pointX: number
 * @field pointY: number
 */

const targetedStyle = {
  opacity: 0.5,
  fill: "#b4a2ff",
};

const BattleMap = ({ positions }) => {
  const [hoveringPosition, setHoveringPosition] = useState(false);
  const [targetPosition, setTargetPosition] = useState(null);
  const [placeType, setPlaceType] = useState("");
  const [rate, setRate] = useState("");

  const [pickerX, setPickerX] = useState(0);
  const [pickerY, setPickerY] = useState(0);
  const [pickerVisible, setPickerVisible] = useState("hidden");

  const mouseOverPosition = (event, position, nextX, nextY) => {
    console.log("mouseOver ", position.placeType, nextX, nextY);
    setPlaceType(position.placeType);
    setRate(`${position.rate}%`);

    setHoveringPosition({
      ...position,
    });
    setPickerX(nextX);
    setPickerY(nextY);
    setPickerVisible("visible");
  };

  const mouseLeavePosition = () => {
    setHoveringPosition(null);
    setPickerVisible("hidden");
  };

  const getPickerPosition = (arr) => {
    let x = 0;
    let y = Number.MAX_VALUE;
    arr.map((item) => {
      const [polygonX, polygonY] = item.trim().split(" ").map(Number);
      if (x < polygonX) x = polygonX;
      if (y > polygonY) y = polygonY;
    });
    return [x, y];
  };

  return (
    <div className="map-info-wrapper" style={{ marginBottom: "24px" }}>
      <div
        style={{
          maxWidth: BREAK_POINT,
          maxHeight: BREAK_POINT,
          cursor: "pointer",
          position: "relative",
        }}
        className="map"
      >
        <img
          style={{ width: "100%", height: "100%" }}
          src={MapImage}
          useMap="#image-map"
        />
        <svg
          id="svg"
          viewBox="0 0 560 560"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          {positions.map((position, idx) => {
            console.log(position.placeType, position.polygon, "!!");
            const [pickerX, pickerY] = getPickerPosition(
              position.polygon.split(",")
            );

            const highlighted =
              (hoveringPosition &&
                hoveringPosition.placeType === position.placeType) ||
              (targetPosition &&
                targetPosition.placeType === position.placeType);
            return (
              <>
                <polygon
                  key={`${position.placeType}`}
                  className={idx.toString()}
                  id={position.placeType}
                  points={position.polygon}
                  style={highlighted ? targetedStyle : { fill: "transparent" }}
                  onMouseOver={(event) => {
                    mouseOverPosition(event, position, pickerX, pickerY);
                  }}
                  onMouseLeave={mouseLeavePosition}
                ></polygon>
              </>
            );
          })}
        </svg>
        <div
          style={{
            position: "absolute",
            height: "50px",
            width: "200px",
            textAlign: "center",
            lineHeight: "50px",
            position: "absolute",
            top: pickerY,
            left: pickerX,
            borderRadius: "25px",
            backgroundColor: "#775ee0",
            color: "#fff",
            visibility: pickerVisible,
          }}
        >
          {placeType} <span style={{ fontWeight: "bold" }}>{rate}</span>
        </div>
      </div>
    </div>
  );
};

export default BattleMap;
