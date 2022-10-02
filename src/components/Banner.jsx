import styled from "@emotion/styled";

const Banner = ({
  imgUrl,
  siteUrl,
  width,
  height,
  marginTop,
  margin,
  ...props
}) => {
  return (
    <StyledBanner
      style={{ width, height, marginTop, margin, ...props }}
      {...props}
    />
  );
};

const StyledBanner = styled.div`
  box-sizing: border-box;
  background-color: #ffffff;
  border: 1px solid #959595;
  margin-bottom: ${(props) => props.marginBottom};
  margin: ${(props) => props.margin};
`;

export default Banner;
