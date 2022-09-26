import { useState } from "react";
import styled from "@emotion/styled";

const StyledDropDown = styled.div``;
const StyledList = styled.div`
  width: 300px;
  background-color: #6f42c1;
`;
const StyledListItem = styled.div`
  width: 250px;
  height: 50px;
  margin: 5px auto;
  border-radius: 5px;
  background-color: #e7e7e7;
`;
const DropDown = () => {
  const [recentlySerach, setRecentlySearch] = useState([
    "개구리",
    "개구리",
    "개구리",
    "개구리",
    "개구리",
    "개구리",
  ]);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <button type="">최근 검색</button>
        <button type="">즐겨찾기 검색</button>
      </div>
      <StyledList>
        {recentlySerach.map((item, idx) => (
          <StyledListItem>{item}</StyledListItem>
        ))}
      </StyledList>
    </div>
  );
};

export default DropDown;
