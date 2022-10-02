import styled from "@emotion/styled";
const StyledBannerWrapper = styled.div`
  height: 1500px;
  max-width: 300px;
  max-height: ${(props) => props.maxHeight || "auto"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default StyledBannerWrapper;
