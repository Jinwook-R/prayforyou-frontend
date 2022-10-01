import styled from "@emotion/styled";
import titleImage from "../assets/logo_3.png";
import { NavLink } from "react-router-dom";
import { COMMON_LAYOUT_HORIZONTAL_PADDING } from "../utils/constants";
import { useLocation } from "react-router";

const Header = ({ isMobile }) => {
  const { pathname } = useLocation();
  return (
    <StyledHeader
      justifyContents={isMobile ? "center" : ""}
      padding={isMobile ? "0 20px" : ""}
      boxSizing={isMobile ? "border-box" : ""}
      width="100%"
    >
      <StyledHeaderInner
        padding={isMobile ? "" : `0 ${COMMON_LAYOUT_HORIZONTAL_PADDING}`}
        height={"120px"}
      >
        <NavLink to={"/"}>
          <img
            src={titleImage}
            alt=""
            style={{ height: isMobile ? "30px" : "40px" }}
          />
        </NavLink>

        {isMobile && <StyledMapName>3 보급창고</StyledMapName>}
      </StyledHeaderInner>
      {pathname === "/" && (
        <StyledHeaderNavigation
          padding={isMobile ? "" : `0 ${COMMON_LAYOUT_HORIZONTAL_PADDING}`}
        >
          <StyledNavLink
            to={"/"}
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            리그홈
          </StyledNavLink>
          <StyledNavLink
            to={"/private"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            개인랭킹
          </StyledNavLink>
          <StyledNavLink
            to={"/clan"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            클랜홈
          </StyledNavLink>
        </StyledHeaderNavigation>
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContents};
  padding: ${(props) => props.padding};
  box-sizing: ${(props) => props.boxSizing};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #775ee1;
  flex-direction: column;
  z-index: 10;
`;

const StyledHeaderInner = styled.div`
  max-width: 1632px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: ${(props) => props.padding};
  justify-content: space-between;
  height: ${(props) => props.height};
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

const StyledHeaderNavigation = styled.div`
  display: flex;
  align-items: center;
  padding: ${(props) => props.padding};
  height: 70px;
  max-width: 1632px;
  width: 100%;
`;

const StyledMapName = styled.div`
  width: 120px;
  height: 40px;
  font-size: 20px;
  background-color: white;
  text-align: center;
  border-radius: 25px;
  line-height: 45px;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  padding: 10px 33px;
  background: none;
  height: 50px;
  cursor: ${(props) => (props.active ? "pointer" : "auto")};
  font-size: 20px !important;
  &:hover {
    //color: aquamarine;
  }
  &.active {
    border: solid 2px white;
  }
  border-radius: 25px;
  text-decoration: none;
  font: var(--fa-font-regular);
  color: white;
`;

export default Header;
