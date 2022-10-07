import React from "react";
import MobilePageToolbarWrapper from "../../components/wrapper/MobilePageToolbarWrapper";
import { Table } from "../../components/table";
import { MobileUserListItem } from "../../components/listItem";
import { useNavigate } from "react-router-dom";

const Mobile = ({ userInfoList, isEnd, onClickMoreButton }) => {
  const navigate = useNavigate();
  const mockTableProps = {
    cellConfigs: [
      {
        name: "참여중인 플레이어",
        style: { width: "100%", fontSize: "15px" },
        renderer: (userInfo) => {
          return (
            <MobileUserListItem
              userName={userInfo.name}
              thumbnail={userInfo.clanMarkUrl}
              onClick={() => {
                navigate(`/record/${userInfo.userNexonId}`);
              }}
              rank={userInfo.rank}
              winCount={userInfo.winCount}
              loseCount={userInfo.loseCount}
              rate={userInfo.winLosePercent}
              killAverage={userInfo.killAverage}
              killDeathRate={userInfo.killDeathRate}
              ladderPoint={userInfo.score}
            />
          );
        },
      },
    ],
    data: userInfoList,
  };
  return (
    <>
      <MobilePageToolbarWrapper>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "white",
              display: "inline-block",
            }}
          >
            개인 랭킹
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "white",
            marginTop: "10px",
            fontSize: "10px",
          }}
        >
          랭킹은 1시간마다 갱신되며, 배치고사가 종료된 플레이어만 표시됩니다.
        </div>
      </MobilePageToolbarWrapper>
      {/*<Banner height={"50px"} margin={"10px"} /> */}
      <Table
        isEnd={isEnd}
        onClickMoreButton={onClickMoreButton}
        headerStyle={{ paddingInline: "30px" }}
        rowStyler={() => {
          return {
            height: "auto",
          };
        }}
        {...mockTableProps}
      />
    </>
  );
};

export default Mobile;
