import styled from "@emotion/styled";
const Button = ({ className, text, handleOnClick, width, ...props }) => {
  return (
    <StyledButton
      className={className}
      onClick={handleOnClick}
      width={width}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: 30px;
  text-align: center;
  border-radius: 15px;
  border: 2px solid #775ee1;
  cursor: pointer;
`;

export default Button;
