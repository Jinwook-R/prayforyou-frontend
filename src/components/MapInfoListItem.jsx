import {
  StyledListItemWrapper,
  StyledListItem,
  StyledListItemText,
} from "./wrapper";
import {
  PLACE_BUTTON,
  GUN_BUTTON,
  ROUND_BUTTON,
  BREAK_POINT,
} from "../utils/constants";
import { useMediaQuery } from "react-responsive";

const MapInfoListItem = ({ outputText, item, clickedButton, index }) => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINT})`,
  });
  const renderPositionInner = () => {
    return (
      <>
        <StyledListItemText fontSize="15px">{index + 1}</StyledListItemText>
        <StyledListItemText flex={1} fontSize="15px">
          {item[outputText[0]]}
        </StyledListItemText>
        <StyledListItemText fontSize="15px" fontWeight="bold">
          {`${item[outputText[1]]}%`}
        </StyledListItemText>
      </>
    );
  };

  const renderGunsInner = () => {
    return (
      <>
        <StyledListItemText fontSize="15px">{index + 1}</StyledListItemText>
        <StyledListItemText flex={1} fontSize="15px">
          {item[outputText[0]]}
        </StyledListItemText>
        <StyledListItemText fontSize="15px" fontWeight="bold">
          {`${item[outputText[1]]}회`}
        </StyledListItemText>
      </>
    );
  };

  const renderRoundInner = () => {
    return (
      <>
        <StyledListItemText fontSize="15px">{index + 1}</StyledListItemText>
        <StyledListItemText flex={1} fontSize="15px">
          {`${item[outputText[0]]} 라운드`}
        </StyledListItemText>
        <StyledListItemText fontSize="15px" fontWeight="bold">
          {`${item[outputText[1]]}회`}
        </StyledListItemText>
      </>
    );
  };

  const renderInner = () => {
    switch (clickedButton) {
      case PLACE_BUTTON:
        return renderPositionInner();
      case GUN_BUTTON:
        return renderGunsInner();
      case ROUND_BUTTON:
        return renderRoundInner();
      default:
        return renderPositionInner();
    }
  };

  return (
    <StyledListItemWrapper
      style={{ margin: "8px 0" }}
      marginBottom={isMobile && "10px"}
    >
      <StyledListItem>{renderInner()}</StyledListItem>
    </StyledListItemWrapper>
  );
};

export default MapInfoListItem;
