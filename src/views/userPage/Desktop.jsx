import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { TopBar, MapInfoList, BattleMap } from "../../components";
import { COMMON_LAYOUT_PC_HORIZONTAL_MAX } from "../../utils/constants";

// const BANNER_PROPS = {
//   width: "85%",
//   height: "100px",
//   margin: "16px auto",
// };

const Desktop = ({
  mapPositions,
  userBattlePositions,
  offset,
  handleOffset,
}) => {
  // const banners = useSelector((store) => store.banner);
  const [sortOrder, setSortOrder] = useState("desc");

  const handleOnClick = (e) => {
    if (e.target.className === sortOrder) return;
    e.target.className.includes("asc") && setSortOrder("asc");
    e.target.className.includes("desc") && setSortOrder("desc");
  };

  return (
    <>
      {/* <div
        style={{
          display: "flex",
          backgroundColor: "#775ee1",
          boxShadow: "0 5px 10px #6852c6 inset",
          paddingTop: "10px",
          paddingLeft: "16px",
        }}
      >
        {userBattle && (
          <TopBar
            style={{
              paddingLeft: "10px",
              margin: "0 auto",
              width: "100%",
              maxWidth: COMMON_LAYOUT_PC_HORIZONTAL_MAX,
            }}
            userId={userId}
            nickname={nickname}
            battle={userBattle}
          />
        )}
      </div> */}
      <div
        style={{
          paddingInline: "16px",
        }}
      >
        <div
          style={{
            justifyContent: "space-between",
            display: "flex",
            maxWidth: COMMON_LAYOUT_PC_HORIZONTAL_MAX,
            margin: "0 auto",
            marginTop: "32px",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              flexGrow: 0,
              flexShrink: 0,
              flexBasis: "40%",
            }}
          >
            <BattleMap
              mapPositions={mapPositions}
              userBattlePositions={userBattlePositions}
            />
          </div>
          <div
            style={{
              flexGrow: 0,
              flexShrink: 0,
              flexBasis: "45%",
            }}
          >
            <div
              style={{
                margin: "0 auto",
                width: "100%",
                textAlign: "right",
                marginBottom: "15px",
              }}
            >
              <StyledSortButton
                className="desc"
                onClick={handleOnClick}
                color={sortOrder === "desc" ? "#fff" : "#b3b3b3"}
                backgroundColor={sortOrder === "desc" ? "#775ee2" : "#808080"}
              >
                높은순
              </StyledSortButton>
              <StyledSortButton
                className="asc"
                onClick={handleOnClick}
                color={sortOrder === "asc" ? "#fff" : "#b3b3b3"}
                backgroundColor={sortOrder === "asc" ? "#775ee2" : "#808080"}
              >
                낮은순
              </StyledSortButton>
            </div>
            <MapInfoList
              data={userBattlePositions.slice().sort((a, b) => {
                if (sortOrder === "asc") {
                  return (
                    Math.floor(b["kill"] / b["kill"] + b["death"]) -
                    Math.floor(a["kill"] / a["kill"] + a["death"])
                  );
                } else if (sortOrder === "desc") {
                  return (
                    Math.floor(a["kill"] / a["kill"] + a["death"]) -
                    Math.floor(b["kill"] / b["kill"] + b["death"])
                  );
                }
              })}
              width="100%"
              outputText={["place", "rate"]}
              offset={offset}
              handleOffset={handleOffset}
            />

            {/* <Banner
              imgUrl={banners?.data?.typeA}
              {...BANNER_PROPS}
              height="50px"
            />
            <Banner
              imgUrl={banners?.data?.typeA}
              {...BANNER_PROPS}
              height="50px"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

const StyledSortButton = styled.button`
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border: none;
  width: 75px;
  height: 30px;
  border-radius: 15px;
  margin-right: 10px;
  text-align: center;
  cursor: pointer;
`;

export default Desktop;
