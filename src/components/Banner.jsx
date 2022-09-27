import styled from "@emotion/styled";

const Banner = ({ imgUrl, siteUrl, width, height, marginTop, ...props }) => {
  return (
    <StyledBanner
      style={{ width, height, marginTop }}
      {...props}
    ></StyledBanner>
  );
};

const StyledBanner = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  margin-bottom: ${(props) => props.marginBottom};
`;

export default Banner;
