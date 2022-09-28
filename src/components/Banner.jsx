import styled from "@emotion/styled";

const Banner = ({ imgUrl, siteUrl, width, height, marginTop, ...props }) => {
  return (
    <StyledBanner
      style={{ width, height, marginTop, ...props }}
      {...props}
    ></StyledBanner>
  );
};

const StyledBanner = styled.div`
  box-sizing: border-box;
  background-color: #ffffff;
  border: 1px solid #959595;
  margin-bottom: ${(props) => props.marginBottom};
`;

export default Banner;
