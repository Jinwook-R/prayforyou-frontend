import styled from "@emotion/styled";

const StyledButtonWrapper = styled.div`
  width: ${(props) => props.width};
  margin: 0 auto;
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "space-between"};
  height: ${(props) => props.height};
`;

export default StyledButtonWrapper;
