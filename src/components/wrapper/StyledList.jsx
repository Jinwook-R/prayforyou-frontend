import styled from "@emotion/styled";

const StyledList = styled.div`
  width: 100%;
  max-height: 850px;
  background-color: #775ee1;
  padding: 20px;
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
