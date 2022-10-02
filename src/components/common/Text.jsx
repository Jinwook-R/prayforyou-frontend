import styled from "@emotion/styled";

const Text = styled.div`
  display: flex;
  height: ${(props) => props.height || "auto"};
  justify-content: ${(props) => props.justifyContent || "start"};
  align-items: ${(props) => props.alignItems || "center"};
  font-size: ${(props) => props.fontSize || "13px"};
  font-weight: ${(props) => props.fontWeight || "normal"};
`;

export default Text;
