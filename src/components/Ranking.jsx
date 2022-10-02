import React, { useCallback, useState } from "react";
import {
  StyledList,
  StyledListItemWrapper,
  StyledListItem,
  StyledListItemText,
} from "./wrapper";
import styled from "@emotion/styled";
import { clanListItemMockData } from "./listItem/ClanListItem";
import { ClanListItem } from "./listItem";

const mockData = {
  firstClanList: Array.from(
    { length: 20 }, // 유사배열
    () => {
      return { ...clanListItemMockData };
    }
  ),
  secondClanList: Array.from(
    { length: 20 }, // 유사배열
    () => {
      return { ...clanListItemMockData };
    }
  ),
};

const Ranking = ({ data, ...props }) => {
  const [clanListTypeSwitch, setClanListTypeSwitch] = useState("first");

  const handleOnClick = (e) => {
    e.preventDefault();
    if (e.target.className.includes(clanListTypeSwitch)) return;
    clanListTypeSwitch === "first" && setClanListTypeSwitch("second");
    clanListTypeSwitch === "second" && setClanListTypeSwitch("first");
  };

  //const { dailyView, weeklyView } = data;

  const { firstClanList, secondClanList } = mockData;
  const renderList = useCallback(() => {
    const targetList =
      clanListTypeSwitch === "first" ? firstClanList : secondClanList;

    return targetList && targetList.length > 0 ? (
      <>
        {targetList.map((item, index) => {
          return <ClanListItem key={`${index}`} {...item} />;
        })}
      </>
    ) : (
      <StyledListItemWrapper>
        <StyledListItem textAlign="left">
          <StyledListItemText textAlign="left" fontSize="20px">
            결과 없음
          </StyledListItemText>
        </StyledListItem>
      </StyledListItemWrapper>
    );
  }, [firstClanList, secondClanList, clanListTypeSwitch]);

  return (
    <div
      className="ranking"
      style={{
        borderRadius: "15px",
        marginTop: "16px",
        overflow: "hidden",
        ...props,
      }}
    >
      <p style={{ textAlign: "left", color: "#858585" }}>
        * 인기 순위는 조회수 기준입니다
      </p>
      <div
        style={{
          display: "flex",
          borderRadius: "15px 15px 0 0",
          overflow: "hidden",
          border: "1px solid #b3b3b3",
          borderBottom: "0",
        }}
      >
        <StyledButton
          className="first"
          type="button"
          onClick={handleOnClick}
          style={{
            textDecoration:
              clanListTypeSwitch === "first" ? "underline" : "none",
            backgroundColor:
              clanListTypeSwitch === "first" ? "#775ee1" : "#f7f7f7",
            color: clanListTypeSwitch === "first" ? "white" : "black",
          }}
          onMouseDown={(e) => e.preventDefault()}
        >
          1부 리그
        </StyledButton>
        <StyledButton
          className="second"
          type="button"
          onClick={handleOnClick}
          style={{
            textDecoration:
              clanListTypeSwitch === "second" ? "underline" : "none",
            backgroundColor:
              clanListTypeSwitch === "second" ? "#775ee1" : "#f7f7f7",
            color: clanListTypeSwitch === "second" ? "white" : "black",
            borderRadius: "0 15px 0 0",
          }}
        >
          2부 리그
        </StyledButton>
      </div>
      <StyledList borderRadius="0 0 15px 15px">{renderList()}</StyledList>
    </div>
  );
};

const StyledButton = styled.button`
  width: 50%;
  height: 75px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  text-underline-offset: 10px;
`;

export default Ranking;
