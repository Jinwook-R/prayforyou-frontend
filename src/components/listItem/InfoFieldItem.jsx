import styled from "@emotion/styled";

const InfoFieldItem = ({ fieldName, value, ...props }) => {
  return (
    <Wrapper {...props}>
      <div>{fieldName}</div>
      <div style={{ fontWeight: "bold", color: "#775ee2" }}>{value}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 18px 30px;
  height: ${(props) => props.height};
  font-size: 20px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export default InfoFieldItem;
