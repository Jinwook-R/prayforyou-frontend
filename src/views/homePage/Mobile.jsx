import React, { useEffect, useState } from "react";
import { Title, Search, DropDown } from "../../components";
import { useDispatch } from "react-redux";
import { fetchAllBanners } from "../../redux/banner/bannerSlice";
import {
  StyledList,
  StyledListItemWrapper,
  StyledListItem,
  StyledListItemText,
} from "../../components/wrapper";
const Mobile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBanners());
  }, []);

  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = (value) => {
    setDropDown(value);
  };

  const [filteredUserNames, setFilteredUserNames] = useState([]);
  const [userName, setUserName] = useState("");

  return (
    <div style={{ padding: "0 16px", paddingTop: "100px" }}>
      <Title width="210px" />
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onMouseDown={(e) => {
          if (!e.target.className.includes("searchInput")) {
            e.preventDefault();
          }
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
        {dropDown && userName && (
          <StyledList
            width={"80%"}
            padding={filteredUserNames.length ? "10px" : "none"}
          >
            {filteredUserNames.map((item, idx) => (
              <StyledListItemWrapper
                key={`${idx}`}
                marginBottom={"10px"}
                borderRadius={"15px"}
              >
                <StyledListItem height={"72px"}>
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
                    {/* TODO: 클랜명 연동 */}
                    {"테스트 클랜명"}
                  </StyledListItemText>
                </StyledListItem>
              </StyledListItemWrapper>
            ))}
          </StyledList>
        )}
        {!dropDown && !userName && (
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
