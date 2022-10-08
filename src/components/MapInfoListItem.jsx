import {
  StyledListItemWrapper,
  StyledListItem,
  StyledListItemText,
} from "./wrapper";
import { BREAK_POINT } from "../utils/constants";
import { useMediaQuery } from "react-responsive";
import { setHover } from "../redux/map/mapSlice";
import { useDispatch } from "react-redux";
const MapInfoListItem = ({ outputText, item, index }) => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINT})`,
  });
  const dispatch = useDispatch();

  const renderPositionInner = () => {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <StyledListItemText fontSize="15px">{index + 1}</StyledListItemText>
          <StyledListItemText flex={1} fontSize="15px">
            {item[outputText[0]]}
          </StyledListItemText>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <StyledListItemText fontSize="15px" fontWeight="bold">
            {item[outputText[1]]} 킬
          </StyledListItemText>
          <StyledListItemText fontSize="15px" fontWeight="bold">
            {item[outputText[2]]} 데스
          </StyledListItemText>
          <StyledListItemText fontSize="15px" fontWeight="bold">
            {`${(
              (item[outputText[1]] * 100) /
              (item[outputText[1]] + item[outputText[2]])
            ).toFixed(2)}%`}
          </StyledListItemText>
        </div>
      </div>
    );
  };

  return (
    <StyledListItemWrapper
      style={{ margin: "8px 0" }}
      marginBottom={isMobile && "10px"}
    >
      <StyledListItem
        onMouseOver={() => {
          dispatch(
            setHover({
              isHovered: true,
              hoveredPlaceType: item[outputText[0]],
            })
          );
        }}
        onMouseOut={() => {
          dispatch(
            setHover({
              isHovered: false,
              hoveredPlaceType: "",
            })
          );
        }}
        width="100%"
      >
        {renderPositionInner()}
      </StyledListItem>
    </StyledListItemWrapper>
  );
};

export default MapInfoListItem;
