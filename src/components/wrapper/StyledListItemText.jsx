import styled from "@emotion/styled";

const StyledListItemText = styled.div`
  color: ${(props) => props.color};
  width: ${({width})=>width || 'auto'};
  flex: ${props=>props.flex || 'none'};
  text-align: ${(props) => props.textAlign};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight ? props.fontWeight : 'normal'};
`;

export default StyledListItemText;
