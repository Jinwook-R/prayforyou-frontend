import styled from "@emotion/styled";

const ListItem = ({ item = { place: "", item: "" } }) => {
  const { place, rate } = item;
  return (
    <StyledListItem>
      <p>{place}</p>
      <p>{rate}</p>
    </StyledListItem>
  );
};

const StyledListItem = styled.div`
  width: 100%;
  height: 65px;
  margin: 0 auto;
  margin-bottom: 16px;
  border-radius: 15px;
  background-color: #f7f7f7;
`;

export default ListItem;