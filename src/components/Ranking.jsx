import React, { useState } from "react";
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

  return (
    <div
      className="ranking"
      style={{
        borderRadius: "15px",
        minHeight: "250px",
        marginTop: "16px",
        overflow: "hidden",
        ...props,
      }}
    >
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
            backgroundColor:
              weeklyDailyButtonToggle === "daily" ? "#775ee1" : "#f7f7f7",
            color: weeklyDailyButtonToggle === "daily" ? "white" : "black",
            borderRadius: "0 15px 0 0",
          }}
        >
          데일리 일간
        </StyledButton>
      </div>
      <StyledList>
        {[] &&
          [].map((item, idx) => (
            <StyledListItem key={`${idx}`}>{item}</StyledListItem>
          ))}
      </StyledList>
    </div>
  );
};

const StyledRanking = styled.div`
  margin: 0 auto;
  min-height: 250px;
  border-radius: 15px;
  background-color: #775ee1;
  padding: 7px 0;
`;

const StyledButton = styled.button`
  width: 50%;
  height: 75px;
  font-size: 20px;
  border: none;
  cursor: pointer;
`;

const StyledList = styled.div`
  width: 100%;
  min-height: 350px;
  background-color: #775ee1;
  padding: 20px 0;
`;

const StyledListItem = styled.div`
  width: 95%;
  height: 70px;
  margin: 0 auto;
  margin-bottom: 12px;
  border-radius: 12px;
  background-color: #f7f7f7;
  cursor: pointer;
`;
export default Ranking;
