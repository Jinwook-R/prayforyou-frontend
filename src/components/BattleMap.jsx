import MapImage from "../assets/map.svg";
import { useEffect, useState } from "react";
import { BREAK_POINT } from "../utils/constants";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
/** Position
 * @field rate : string
 * @field polygon : string (number number, ...)
 * @field placeType : string
 *   - used as Position Id and Position name
 * @field mapPositions
 */

/** PositionWithPoint extends Position
 * @field pointX: number
 * @field pointY: number
 */

const targetedStyle = {
  opacity: 0.5,
  fill: "#b4a2ff",
};

const BattleMap = ({ mapPositions, userBattlePositions }) => {
  const [hoveringPosition, setHoveringPosition] = useState(false);
  const [placeType, setPlaceType] = useState("");
  const [rate, setRate] = useState("");
  const hover = useSelector((state) => state.map.hover);
  const isMobile = useMediaQuery({ query: `(max-width: ${BREAK_POINT}px)` });

  useEffect(() => {
    if (hover.isHovered) {
      const hoveredPosition = userBattlePositions?.find(
        (item) => item.description === hover.hoveredPlaceType
      );

      setPlaceType(hoveredPosition.description);
      setRate(hoveredPosition.rate);
    } else {
      setPlaceType("");
      setRate("");
    }
  }, [hover]);

  const mouseOverPosition = (event, position, nextX, nextY) => {
    setPlaceType(position.placeType);
    const userBattlePosition = userBattlePositions?.find(
      (item) => item.description === position.placeType
    );

    setRate(`${userBattlePosition ? `${userBattlePosition.rate}` : "0"}`);

    setHoveringPosition({
      ...position,
    });
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

  console.log(mapPositions);

  return (
    <div className="map-info-wrapper" style={{ marginBottom: "24px" }}>
      <div
        className="map"
        style={{
          maxWidth: BREAK_POINT,
          maxHeight: BREAK_POINT,
          cursor: "pointer",
          position: "relative",
        }}
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
          {mapPositions.map((position, idx) => {
            const [pickerX, pickerY] = getPickerPosition(
              position.polygon.split(",")
            );

            const highlighted =
              (hoveringPosition &&
                hoveringPosition.placeType === position.placeType) ||
              (hover.isHovered &&
                hover.hoveredPlaceType === position.placeType);

            return (
              <g onMouseLeave={mouseLeavePosition}>
                <polygon
                  key={`${position.placeType}`}
                  className={idx.toString()}
                  id={position.placeType}
                  points={position.polygon}
                  style={highlighted ? targetedStyle : { fill: "transparent" }}
                  onMouseOver={(event) => {
                    mouseOverPosition(event, position, pickerX, pickerY);
                  }}
                />
                <g>
                  <foreignObject
                    x={pickerX}
                    y={pickerY}
                    width={isMobile ? "100px" : "148px"}
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
                      <p>{rate}%</p>
                    </div>
                  </foreignObject>
                </g>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default BattleMap;
