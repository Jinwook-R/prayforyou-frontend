import React from "react";
import { TopBar } from "../../components";
import { useLocation } from "react-router-dom";
import { COMMON_LAYOUT_PC_HORIZONTAL_MAX } from "../../utils/constants";
import { useSelector } from "react-redux";
const Desktop = () => {
  const location = useLocation();
  const { userId, nickname } = location.state;
  const userBattle = useSelector((state) => state.battle.battle);

  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: "#775ee2",
          boxShadow: "0 5px 10px #6852c6 inset",
          paddingTop: "10px",
        }}
      >
        <TopBar
          style={{
            margin: "0 auto",
            width: "100%",
            maxWidth: COMMON_LAYOUT_PC_HORIZONTAL_MAX,
          }}
          userId={userId}
          nickname={nickname}
          battle={userBattle}
        />
      </div>
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
            flexBasis: "73%",
          }}
        >
          {Array.from({ length: 10 }).map((e, i) => {
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "right",
                  alignContent: "stretch",
                  height: "180px",
                  maxWidth: COMMON_LAYOUT_PC_HORIZONTAL_MAX,
                  width: "100%",
                  backgroundColor: i % 2 ? "#676472" : "#775ee2",
                  margin: "10px",
                }}
              >
                <ul
                  style={{
                    flexGrow: 1,
                    backgroundColor: "#fff",
                  }}
                >
                  <li>제3보급창고</li>
                  <li>17분1초</li>
                  <li>패배</li>
                  <li>5일전</li>
                </ul>
                <ul
                  style={{
                    flexGrow: 1,
                    backgroundColor: "#fff",
                  }}
                >
                  <li>레더</li>
                  <li>+12점</li>
                </ul>
                <ul
                  style={{
                    flexGrow: 2,
                    backgroundColor: "#fff",
                  }}
                >
                  <li>토끼토끼 클랜</li>
                  <li>1부리그 18,985점</li>
                </ul>
                <ul
                  style={{
                    flexGrow: 0.5,
                    backgroundColor: "transparent",
                    color: "#fff",
                  }}
                >
                  <li>vs</li>
                </ul>
                <ul
                  style={{
                    flexGrow: 2,
                    backgroundColor: "#fff",
                  }}
                >
                  <li>#ToRtOiSe</li>
                  <li>1부리그 18,985점</li>
                </ul>
                <ul
                  style={{
                    flexGrow: 1,
                    backgroundColor: "#fff",
                  }}
                >
                  <li>선레드</li>
                  <li>5 vs 5</li>
                </ul>
                <ul
                  style={{
                    flexGrow: 2,
                    backgroundColor: "#fff",
                  }}
                >
                  <li>개구리</li>
                  <li>개구리</li>
                  <li>개구리</li>
                  <li>개구리</li>
                  <li>개구리</li>
                </ul>
                <ul
                  style={{
                    flexGrow: 2,
                    backgroundColor: "#fff",
                  }}
                >
                  <li>개구리</li>
                  <li>개구리</li>
                  <li>개구리</li>
                  <li>개구리</li>
                  <li>개구리</li>
                </ul>
                <ul
                  style={{
                    width: "120px",
                    backgroundColor: "transparent",
                    color: "#fff",
                  }}
                >
                  <li>상세보기</li>
                </ul>
              </div>
            );
          })}
        </div>
        <div
          style={{
            flexBasis: "20%",
            height: "192px",
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "0 19px",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>래더</p>
            <p>1976점</p>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>승률</p>
            <p>717tmd 512vo 57.9%</p>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>랭킹</p>
            <p>1위</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Desktop;
