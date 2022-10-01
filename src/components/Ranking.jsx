import React, { useCallback, useState } from "react";
import {
  StyledList,
  StyledListItemWrapper,
  StyledListItem,
  StyledListItemText,
} from "./wrapper";
import styled from "@emotion/styled";

const Ranking = ({ data, ...props }) => {
  const [weeklyDailyButtonToggle, setWeeklyDailyButtonToggle] =
    useState("weekly");

  const handleOnClick = (e) => {
    e.preventDefault();
    if (e.target.className.includes(weeklyDailyButtonToggle)) return;
    weeklyDailyButtonToggle === "weekly" && setWeeklyDailyButtonToggle("daily");
    weeklyDailyButtonToggle === "daily" && setWeeklyDailyButtonToggle("weekly");
  };

  const { dailyView, weeklyView } = data;

  const renderList = useCallback(() => {
    const targetList =
      weeklyDailyButtonToggle === "weekly" ? weeklyView : dailyView;

    return targetList && targetList.length > 0 ? (
      <>
        {targetList.map((item, idx) => {
          return (
            <StyledListItemWrapper key={`${idx}`}>
              <StyledListItem>
                <StyledListItemText
                  width={"50px"}
                  textAlign="left"
                  fontSize="20px"
                >
                  {idx + 1}
                </StyledListItemText>
                <StyledListItemText flex={1} textAlign="left" fontSize="20px">
                  {item.nickname}
                </StyledListItemText>
                <StyledListItemText
                  textAlign="right"
                  fontSize="16px"
                  color="#59575b"
                >
                  테스트 클랜
                </StyledListItemText>
              </StyledListItem>
            </StyledListItemWrapper>
          );
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
  }, [dailyView, weeklyView, weeklyDailyButtonToggle]);

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
          className="weekly"
          type="button"
          onClick={handleOnClick}
          style={{
            textDecoration:
              weeklyDailyButtonToggle === "weekly" ? "underline" : "none",
            backgroundColor:
              weeklyDailyButtonToggle === "weekly" ? "#775ee1" : "#f7f7f7",
            color: weeklyDailyButtonToggle === "weekly" ? "white" : "black",
          }}
          onMouseDown={(e) => e.preventDefault()}
        >
          위클리 주간
        </StyledButton>
        <StyledButton
          className="daily"
          type="button"
          onClick={handleOnClick}
          style={{
            textDecoration:
              weeklyDailyButtonToggle === "daily" ? "underline" : "none",
            backgroundColor:
              weeklyDailyButtonToggle === "daily" ? "#775ee1" : "#f7f7f7",
            color: weeklyDailyButtonToggle === "daily" ? "white" : "black",
            borderRadius: "0 15px 0 0",
          }}
        >
          데일리 일간
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
