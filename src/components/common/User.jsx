import styled from "@emotion/styled";
import { Text } from "./index";

const User = ({
  name,
  thumbnail,
  onClick,
  thumbnailSize = 40,
  fontSize = "20px",
  fontWeight = "normal",
  paddingBetween = "22px",
}) => {
  return (
    <UserWrapper onClick={onClick} cursor={onClick && "pointer"}>
      <UserCell paddingInline={"0px"} paddingRight={paddingBetween}>
        <img width={thumbnailSize} height={thumbnailSize} src={thumbnail} />
      </UserCell>
      <UserCell paddingInline={"0px"}>
        <Text fontSize={fontSize} fontWeight={fontWeight}>
          {name}
        </Text>
      </UserCell>
    </UserWrapper>
  );
};

const UserWrapper = styled.div`
  cursor: ${(props) => props.cursor};
  border-radius: 15px;
  display: flex;
  align-items: center;
`;

const UserCell = styled.div`
  padding-inline: ${(props) => props.paddingInline || "10px"};
  padding-right: ${(props) => props.paddingRight || "10px"};
  flex: ${(props) => props.flex || "none"};
  width: ${(props) => props.width || "auto"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  display: flex;
  align-items: ${(props) => props.alignItems || "center"};
  justify-content: ${(props) => props.justifyContent || "center"};
`;
export default User;
