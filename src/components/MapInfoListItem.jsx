import styled from "@emotion/styled";
import {
  StyledListItemWrapper,
  StyledListItem,
  StyledListItemText,
} from "./wrapper";

const MapInfoListItem = ({ key, outputText, item }) => {
  return (
    <StyledListItemWrapper>
      <StyledListItem key={`${key}`}>
        <StyledListItemText textAlign="left">
          {item[outputText[0]]}
        </StyledListItemText>
        <StyledListItemText textAlign="right">
          {item[outputText[1]]}
        </StyledListItemText>
      </StyledListItem>
    </StyledListItemWrapper>
  );
};

// const StyledListItem = styled.div`
//   width: 95%;
//   height: 65px;
//   margin: 0 auto;
//   margin-bottom: 16px;
//   border-radius: 15px;
//   background-color: #f7f7f7;
// `;

export default MapInfoListItem;
