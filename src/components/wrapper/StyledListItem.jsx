import styled from "@emotion/styled";

const StyledListItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: ${(props) => props.width || "auto"};
  font-size: 25px;
  text-align: left;
  padding-inline: ${(props) => props.paddingInline || "16px"};
  margin: 0 auto;
  cursor: pointer;
  height: ${(props) => props.height || "85px"};
`;

export default StyledListItem;
