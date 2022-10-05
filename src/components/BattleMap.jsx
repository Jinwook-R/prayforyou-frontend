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

  const isMobile = useMediaQuery({ query: `(max-width: ${BREAK_POINT}px)` });

  const mouseOverPosition = (event, position, nextX, nextY) => {
    console.log("mouseOver ", position.placeType, nextX, nextY, position);
    setPlaceType(position.placeType);
    setRate(`${position.rate}%`);

    setHoveringPosition({
      ...position,
    });
    setPickerX(nextX);
    setPickerY(nextY);
  };

  const mouseLeavePosition = () => {
    setHoveringPosition(null);
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
                <g onMouseLeave={mouseLeavePosition}>
                  <polygon
                    key={`${position.placeType}`}
                    className={idx.toString()}
                    id={position.placeType}
                    points={position.polygon}
                    style={
                      highlighted ? targetedStyle : { fill: "transparent" }
                    }
                    onMouseOver={(event) => {
                      mouseOverPosition(event, position, pickerX, pickerY);
                    }}
                  />
                  <g>
                    <foreignObject
                      x={pickerX}
                      y={pickerY}
                      width={isMobile ? "100px" : "181px"}
                      height="50px"
                      style={
                        highlighted
                          ? { fill: "#775ee1", color: "#fff" }
                          : { display: "none" }
                      }
                    >
                      <div
                        style={{
                          backgroundColor: "#775ee1",
                          display: "flex",
                          justifyContent: "space-around",
                          borderRadius: "35px",
                          fontSize: isMobile ? "12px" : "15px",
                          padding: "0 5px",
                        }}
                      >
                        <p>{placeType}</p>
                        <p>{rate}</p>
                      </div>
                    </foreignObject>
                    {/* <rect
                      key={`${position.placeType}`}
                      className={idx.toString()}
                      id={position.placeType}
                      x={pickerX}
                      y={pickerY}
                      width="25%"
                      height="50px"
                      rx="5%"
                      ry="5%"
                    >
                      <foreignObject width="25%" height="50px">
                        <text x={pickerX + 25} y={pickerY + 30} fill="#fff">
                          {placeType} {rate}
                        </text>
                      </foreignObject>
                    </rect> */}
                  </g>
                </g>
              </>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default BattleMap;
