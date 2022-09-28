import styled from "@emotion/styled";
const Button = ({ className, text, handleOnClick, ...props }) => {
  return (
    <StyledButton className={className} onClick={handleOnClick} {...props}>
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  height: 30px;
  text-align: center;
  border-radius: 15px;
  border: 2px solid #775ee2;
  cursor: pointer;
`;

export default Button;
