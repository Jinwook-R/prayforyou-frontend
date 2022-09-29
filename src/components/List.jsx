import styled from "@emotion/styled";
import ListItem from "./ListItem";

const List = ({ data = [], width = "100%", outputText }) => {
  return (
    <StyledList style={{ width }}>
      {data.map((item, index) => {
        return <ListItem></ListItem>;
      })}
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
