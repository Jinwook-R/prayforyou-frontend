import styled from "@emotion/styled";
import { COMMON_LAYOUT_PC_HORIZONTAL_MAX } from "../../utils/constants";

const StyledDesktopWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding-inline: 20px;
  max-width: ${COMMON_LAYOUT_PC_HORIZONTAL_MAX};
`;

export default StyledDesktopWrapper;
