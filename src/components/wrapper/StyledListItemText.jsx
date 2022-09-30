import styled from "@emotion/styled";

const StyledListItemText = styled.p`
  text-align: ${(props) => props.textAlign};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
`;

export default StyledListItemText;
