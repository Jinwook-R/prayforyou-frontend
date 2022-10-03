import styled from "@emotion/styled";

const StyledListItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 25px;
  text-align: left;
  width: 90%;
  margin: 0 auto;
  cursor: pointer;
  height: ${(props) => props.height || "85px"};
`;

export default StyledListItem;
