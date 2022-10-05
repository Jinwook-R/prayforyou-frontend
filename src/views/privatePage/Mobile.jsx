import React from "react";
import MobilePageToolbarWrapper from "../../components/wrapper/MobilePageToolbarWrapper";
import { Banner } from "../../components";
import { Table } from "../../components/table";
import { MobileUserListItem } from "../../components/listItem";

const Mobile = ({ userInfoList }) => {
  const mockTableProps = {
    cellConfigs: [
      {
        name: "참여중인 플레이어",
        style: { width: "100%", fontSize: "15px" },
        renderer: (userInfo) => {
          return (
            <MobileUserListItem
              userName={userInfo.nickname}
              thumbnail={userInfo.thumbnail}
              rank={userInfo.rank}
              winCount={userInfo.winCount}
              loseCount={userInfo.loseCount}
              killAverage={userInfo.killAverage}
              killDeathRate={userInfo.killDeathRate}
              ladderPoint={userInfo.ladderPoint}
            />
          );
        },
      },
    ],
    data: [...userInfoList].map((item, index) => ({
      ...item,
      rank: index + 1,
    })),
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
