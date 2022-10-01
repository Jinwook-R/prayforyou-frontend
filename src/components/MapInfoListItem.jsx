import {
  StyledListItemWrapper,
  StyledListItem,
  StyledListItemText,
} from "./wrapper";
import { PLACE_BUTTON, GUN_BUTTON, ROUND_BUTTON } from "../utils/constants";


const MapInfoListItem = ({ key, outputText, item, clickedButton }) => {
  return (
    <StyledListItemWrapper>
      <StyledListItem key={`${key}`}>
        <StyledListItemText textAlign="left" fontSize="15px" fontWeight="bold">
          {item[outputText[0]]}
        </StyledListItemText>
        <StyledListItemText textAlign="right" fontSize="15px" fontWeight='bold'>
          {item[outputText[1]]} {clickedButton === PLACE_BUTTON && "%"} {clickedButton === GUN_BUTTON && "회"} 
        </StyledListItemText>
      </StyledListItem>
    </StyledListItemWrapper>
  );
};

export default MapInfoListItem;
