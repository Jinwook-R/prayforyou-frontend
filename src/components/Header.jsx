import styled from "@emotion/styled";
import titleImage from "../assets/logo_3.png";
import { NavLink } from "react-router-dom";
import {
  BREAK_POINT,
  COMMON_LAYOUT_PC_HORIZONTAL_MAX,
} from "../utils/constants";
import { useMediaQuery } from "react-responsive";
import { StyledButtonWrapper } from "./wrapper";
import { useRef, useState } from "react";

const Header = () => {
  const menuRef = useRef(null);
  const [mobileMenuDropdown, setMobileMenuDropdown] = useState(false);
  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINT})`,
  });

  const mobileHeaderMenuHandler = () => {
    setMobileMenuDropdown((prevState) => !prevState);
  };

  return (
    <StyledHeader
      justifyContents={isMobile ? "center" : ""}
      boxSizing={isMobile ? "border-box" : ""}
      width="100%"
    >
      <StyledHeaderInnerWrapper>
        <StyledHeaderInner padding={0} height={isMobile ? "56px" : "120px"}>
          <NavLink to={"/"}>
            <div>
              <img
                src={titleImage}
                alt=""
                style={{ height: isMobile ? "24px" : "40px" }}
              />
            </div>
          </NavLink>
          {isMobile && (
            <div
              ref={menuRef}
              style={{
                display: "flex",
                justifyContent: "end",
                position: "relative",
              }}
            >
              <StyledButtonWrapper
                onClick={mobileHeaderMenuHandler}
                justifyContent={"center"}
                height={"40px"}
                style={{
                  height: "40px",
                  width: "100px",
                  alignItems: "center",
                  border: "solid 2px white",
                  color: "white",
                  borderRadius: "25px",
                }}
              >
                메뉴
              </StyledButtonWrapper>
              {mobileMenuDropdown && (
                <Dropdown
                  style={{
                    top: "42px",
                    width: "100px",
                  }}
                >
                  <DropdownItem
                    to={"/league"}
                    onClick={mobileHeaderMenuHandler}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    리그홈
                  </DropdownItem>
                  <DropdownItem
                    to={"/private"}
                    onClick={mobileHeaderMenuHandler}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    개인랭킹
                  </DropdownItem>
                  <DropdownItem
                    to={"/clan"}
                    onClick={mobileHeaderMenuHandler}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    클랜홈
                  </DropdownItem>
                </Dropdown>
              )}
            </div>
          )}
        </StyledHeaderInner>
      </StyledHeaderInnerWrapper>
      {!isMobile && (
        <StyledHeaderInnerWrapper>
          <StyledHeaderNavigation padding={0}>
            <StyledNavLink
              to={"/league"}
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
        </StyledHeaderInnerWrapper>
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

const StyledHeaderInnerWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

const StyledHeaderInner = styled.div`
  max-width: ${COMMON_LAYOUT_PC_HORIZONTAL_MAX};
  width: 100%;
  display: flex;
  align-items: center;
  padding: ${(props) => props.padding || "16px"};
  justify-content: space-between;
  height: ${(props) => props.height};
`;

const StyledHeaderNavigation = styled.div`
  display: flex;
  align-items: center;
  padding: ${(props) => props.padding || "20px"};
  height: 70px;
  max-width: ${COMMON_LAYOUT_PC_HORIZONTAL_MAX};
  width: 100%;
`;

const Dropdown = styled.div`
  background: #775ee1;
  border-radius: 16px;
  padding: 8px;
  position: absolute;
  > * + * {
    margin-top: 5px;
  }
`;

const DropdownItem = styled(NavLink)`
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  color: white;
  padding-inline: 8px;
  height: 36px;
  font-size: 16px;
  &.active {
    border: solid 2px white;
  }
  border-radius: 10px;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  padding: 10px 33px;
  background: ${(props) => props.background || "none"};
  height: 50px;
  cursor: ${(props) => (props.active ? "pointer" : "auto")};
  font-size: ${(props) => props.fontSize || "20px"} !important;
  &:hover {
    //color: aquamarine;
  }
  &.active {
    border: solid 2px white;
  }
  border-radius: ${(props) => props.borderRadius || "25px"};
  text-decoration: none;
  font: var(--fa-font-regular);
  color: white;
`;

export default Header;
