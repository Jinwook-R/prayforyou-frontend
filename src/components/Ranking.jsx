import React, { useCallback, useMemo, useState } from "react";
import {
  StyledList,
  StyledListItemWrapper,
  StyledListItem,
  StyledListItemText,
  StyledButtonWrapper,
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

const Ranking = ({ data, pageUnit = 8, ...props }) => {
  const [clanListTypeSwitch, setClanListTypeSwitch] = useState("first");

  const [pageCount, setPageCount] = useState(0);
  const isEnd = useMemo(() => {
    return (pageCount + 1) * pageUnit > data.length;
  }, [pageUnit, data, pageCount]);

  const handleOnClick = (e) => {
    e.preventDefault();
    if (e.target.className.includes(clanListTypeSwitch)) return;
    clanListTypeSwitch === "first" && setClanListTypeSwitch("second");
    clanListTypeSwitch === "second" && setClanListTypeSwitch("first");
    setPageCount(0);
  };

  const moreButtonHandler = () => {
    setPageCount((prevState) => prevState + 1);
  };

  //const { dailyView, weeklyView } = data;

  const { firstClanList, secondClanList } = mockData;
  const renderList = useCallback(() => {
    const targetList =
      clanListTypeSwitch === "first" ? firstClanList : secondClanList;
    const slicedData = (() => {
      const sliceCount = (pageCount + 1) * pageUnit;
      const parsed =
        targetList.length < sliceCount ? targetList.length : sliceCount;
      return (targetList || []).slice(0, parsed);
    })();
    return slicedData && slicedData.length > 0 ? (
      <>
        {slicedData.map((item, index) => {
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
  }, [
    firstClanList,
    secondClanList,
    clanListTypeSwitch,
    data,
    pageCount,
    pageUnit,
  ]);

  return (
    <div
      className="ranking"
      style={{
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
      {!isEnd && (
        <StyledButtonWrapper
          height={"80px"}
          justifyContent={"center"}
          onClick={moreButtonHandler}
          style={{
            width: "100%",
            marginTop: "20px",
            alignItems: "center",
            background: "#775ee2",
            fontWeight: "bold",
            fontSize: "20px",
            color: "white",
          }}
        >
          더보기
        </StyledButtonWrapper>
      )}
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
