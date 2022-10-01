import styled from "@emotion/styled";

const StyledListItemText = styled.p`
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight ? props.fontWeight : 'normal'};
`;

export default StyledListItemText;
