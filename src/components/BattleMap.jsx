import MapImage from "../assets/map.svg";
import { useState } from "react";

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

  const mouseLeavePosition = () => {
    setHoveringPosition(null);
  };
  const mouseOverPosition = (event, position) => {
    console.log("mouseOver ", event, event.pageX, event.pageY, position);
    setHoveringPosition({
      ...position,
    });
  };

  const clickPosition = (event, position) => {
    setTargetPosition({
      ...position,
      pointX: event.pageX,
      pointY: event.pageY,
    });
  };

  return (
    <div className="map-info-wrapper">
      <div style={{ width: "560px", height: "560px" }} className="map">
        <img
          style={{ width: "100%", height: "100%" }}
          src={MapImage}
          useMap="#image-map"
        />
        <svg
          id="svg"
          onScroll={() => {}}
          viewBox="0 0 560 560"
          style={{ position: "relative", bottom: "100%" }}
        >
          {positions.map((position, idx) => {
            const highlighted =
              (hoveringPosition &&
                hoveringPosition.placeType === position.placeType) ||
              (targetPosition &&
                targetPosition.placeType === position.placeType);
            return (
              <polygon
                key={`${position.placeType}`}
                className={idx.toString()}
                id={position.placeType}
                points={position.polygon}
                style={highlighted ? targetedStyle : {}}
                onClick={(event) => {
                  clickPosition(event, position);
                }}
                onMouseOver={(event) => {
                  mouseOverPosition(event, position);
                }}
                onMouseLeave={mouseLeavePosition}
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default BattleMap;
