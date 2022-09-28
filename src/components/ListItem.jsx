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
  width: 95%;
  height: 65px;
  margin: 0 auto;
  margin-bottom: 16px;
  border-radius: 15px;
  background-color: #e7e7e7;
`;

export default ListItem;
