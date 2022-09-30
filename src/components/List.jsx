import styled from "@emotion/styled";
import Button from "./Button";
import ListItem from "./ListItem";

const List = ({ data = [], width = "100%", offset, handleOffset }) => {
  return (
    <StyledList style={{ width }}>
      {data.slice(0, offset * 8).map((item, index) => {
        return <ListItem key={`${index}`}></ListItem>;
      })}
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        {offset * 8 < data.length && (
          <Button
            onClick={handleOffset}
            text={"더 보기"}
            width={"100px"}
          ></Button>
        )}
      </div>
    </StyledList>
  );
};

const StyledList = styled.div`
  margin: 0 auto;
  height: 730px;
  border-radius: 15px;
  background-color: #775ee1;
  padding: 7px 0;
  overflow: scroll;
`;

export default List;
