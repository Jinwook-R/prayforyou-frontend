import React, { useState } from "react";
import { Title, Search } from "../../components";
import {
  StyledList,
  StyledListItemWrapper,
  StyledListItem,
  StyledListItemText,
} from "../../components/wrapper";
import { useNavigate } from "react-router-dom";
const Mobile = () => {
  const navigate = useNavigate();

  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = (value) => {
    setDropDown(value);
  };

  const [filteredUserNames, setFilteredUserNames] = useState([]);
  const [userName, setUserName] = useState("");

  return (
    <div style={{ padding: "0 16px", paddingTop: "100px" }}>
      <Title marginBottom="50px" width="210px" />
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onMouseDown={(e) => {
          // if (!e.target.className.includes("searchInput")) {
          //   e.preventDefault();
          // }
        }}
      >
        <Search
          dropDown={dropDown}
          handleDropDown={handleDropDown}
          style={{ marginInline: "32px" }}
          setFilteredUserNames={setFilteredUserNames}
          setUserName={setUserName}
          userName={userName}
        />
        {dropDown && userName && !!filteredUserNames.length && (
          <StyledList width={"80%"} padding="10px">
            {filteredUserNames.map((item, idx) => (
              <StyledListItemWrapper
                key={`${item.userNexonId}`}
                marginBottom={"10px"}
                borderRadius={"15px"}
              >
                <StyledListItem
                  height={"72px"}
                  width={"100%"}
                  onClick={() => {
                    navigate(`/record/${item.userNexonId}`);
                  }}
                  justifyContent={"spaceBetween"}
                >
                  <StyledListItemText
                    flex={1}
                    textAlign="left"
                    fontSize={"15px"}
                  >
                    {item.nickname}
                  </StyledListItemText>
                  <StyledListItemText
                    flex={1}
                    textAlign="right"
                    fontSize={"15px"}
                  >
                    {item?.clanName}
                  </StyledListItemText>
                </StyledListItem>
              </StyledListItemWrapper>
            ))}
          </StyledList>
        )}
        {!dropDown && (
          <div
            style={{
              height: "250px",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Mobile;
