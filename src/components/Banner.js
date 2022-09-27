import styled from "@emotion/styled";

const Banner = ({ imgUrl, siteUrl, width, height, ...props }) => {
  return <StyledBanner style={{ width, height }} {...props}></StyledBanner>;
};

const StyledBanner = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  margin-bottom: ${(props) => props.marginBottom};
`;

export default Banner;
