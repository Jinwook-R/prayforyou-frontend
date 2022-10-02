import styled from "@emotion/styled";
import { Text } from "./index";

const User = ({ name, thumbnail }) => {
  return (
    <UserWrapper>
      <UserCell paddingInline={"0px"} paddingRight={"11px"}>
        <img width={40} height={40} src={thumbnail} />
      </UserCell>
      <UserCell>
        <Text fontSize={"20px"}>{name}</Text>
      </UserCell>
    </UserWrapper>
  );
};

const UserWrapper = styled.div`
  border-radius: 15px;
  background: white;
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
