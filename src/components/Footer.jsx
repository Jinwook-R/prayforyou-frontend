import useState from "react";
import useWindowSize from "../hooks/useWindowSize";
import styled from "@emotion/styled";

const Footer = () => {
  const [width] = useWindowSize();
  return <StyledFooter width={width}></StyledFooter>;
};

const StyledFooter = styled.div`
  width: ${(props) => props.width};
  min-width: 1615px;
  height: 200px;
  background-color: #1e1839;
  color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Footer;
