import styled from "@emotion/styled";

const StyledListItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: ${(props) => props.marginBottom};
  background-color: #f7f7f7;
  border-radius: ${(props) => props.borderRadius || "20px"};
`;

export default StyledListItemWrapper;
