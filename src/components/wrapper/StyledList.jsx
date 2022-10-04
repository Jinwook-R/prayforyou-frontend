import styled from "@emotion/styled";

const StyledList = styled.div`
  width: ${(props) => props.width};
  background-color: #775ee1;
  max-height: ${(props) => props.maxHeight || "auto"};
  padding: ${(props) => props.padding || "20px"};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "15px"};
  overflow: scroll;
  > * {
    margin-top: 10px;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default StyledList;
