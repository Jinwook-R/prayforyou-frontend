import styled from "@emotion/styled";
import ListItem from "./ListItem";

const List = ({ data = [], width = "100%", offset, handleOffset }) => {
  console.log(offset);
  console.log(data.slice(0, offset * 8));
  return (
    <StyledList style={{ width }}>
      {data.slice(0, offset * 8).map((item, index) => {
        return <ListItem key={`${index}`}></ListItem>;
      })}
      {offset * 8 < data.length && (
        <button onClick={handleOffset}>더 보기</button>
      )}
    </StyledList>
  );
};

const StyledList = styled.div`
  margin: 0 auto;
  min-height: 250px;
  border-radius: 15px;
  background-color: #775ee1;
  padding: 7px 0;
`;

export default List;
