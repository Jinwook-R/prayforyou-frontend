import styled from "@emotion/styled";
import Button from "./Button";
import ListItem from "./ListItem";

const List = ({
  data = [],
  width = "100%",
  marginLeft,
  offset,
  handleOffset,
}) => {
  return (
    <StyledList style={{ width, marginLeft }}>
      {data.slice(0, offset * 8).map((item, index) => {
        return <ListItem key={`${index}`}></ListItem>;
      })}
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        {offset * 8 < data.length && (
          <Button
            onClick={handleOffset}
            text={"더보기"}
            width={"160px"}
            height={"50px"}
            lineHeight={"40px"}
            fontSize={"20px"}
            borderRadius={"25px"}
          />
        )}
      </div>
    </StyledList>
  );
};

const StyledList = styled.div`
  width: ${(props) => props.width};
  height: 730px;
  border-radius: 15px;
  background-color: #775ee1;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default List;
