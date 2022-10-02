import { StyledButtonWrapper } from "../wrapper";
import { ReactComponent as Star } from "../../assets/star_empty.svg";
import styled from "@emotion/styled";

const Toggle = ({ onClick, toggled, style, iconStyle }) => {
  return (
    <ToggleWrapper
      style={style}
      onClick={onClick}
      justifyContent={"center"}
      color={toggled ? "#775ee1" : "transparent"}
    >
      <Star style={iconStyle} />
    </ToggleWrapper>
  );
};

const ToggleWrapper = styled(StyledButtonWrapper)`
  align-items: center;
  background: white;
  width: 75px;
  height: 45px;
  color: ${(props) => props.color || "transparent"};
  transition: color 0.1s linear;
  border-radius: 25px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

export default Toggle;
