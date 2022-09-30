import styled from "@emotion/styled";
const Button = ({
  className,
  text,
  handleOnClick,
  width,
  height,
  fontSize,
  lineHeight,
  borderRadius,
  ...props
}) => {
  return (
    <StyledButton
      className={className}
      onClick={handleOnClick}
      width={width}
      {...props}
      height={height}
      fontSize={fontSize}
      lineHeight={lineHeight}
      borderRadius={borderRadius}
    >
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: ${(props) => props.lineHeight};
  font-size: ${(props) => props.fontSize};
  text-align: center;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "15px"};
  border: 2px solid #775ee1;
  cursor: pointer;
`;

export default Button;
