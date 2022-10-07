import React from "react";
import { Banner } from "../../components";
import { Table } from "../../components/table";
import MobilePageToolbarWrapper from "../../components/wrapper/MobilePageToolbarWrapper";
import MobileClanListItem from "../../components/listItem/MobileClanListItem";

const Mobile = ({
  leagueTitle,
  leagueType,
  clanData,
  //managerTableProps,
  //mapTableProps,
  isFavorite,
  onClickFavorite,
}) => {
  const clanTableProps = {
    cellConfigs: [
      {
        name: "참여중인 클랜",
        style: { width: "100%", fontSize: "15px" },
        renderer: (clan) => {
          return (
            <MobileClanListItem
              winCount={clan.winCount}
              loseCount={clan.loseCount}
              winLosePercent={clan.winLosePercent}
              clanName={clan.clanName}
              thumbnail={clan.clanMarkUrl}
              leagueType={clan.leagueType}
              ladderPoint={clan.score}
            />
          );
        },
      },
    ],
    data: [...clanData].map((item, index) => ({
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
            {leagueTitle}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "white",
            marginTop: "8px",
            fontSize: "16px",
          }}
        >
          <div
            style={{ height: "24px", display: "flex", alignItems: "center" }}
          >
            {`${leagueType === "public" ? "공식" : "개인"}`}
          </div>
          <div
            style={{ height: "24px", display: "flex", alignItems: "center" }}
          >
            {`${clanData.length}개의 클랜 참여중`}
          </div>
        </div>
      </MobilePageToolbarWrapper>
      {/*<Banner height={"50px"} margin={"10px"} /> */}
      {/* TODO 추후 연동 <Table
        bodyStyle={{ width: "100%" }}
        headerStyle={{ width: "100%", paddingInline: "30px" }}
        rowStyler={() => {
          return {
            paddingInline: "30px",
            height: "60px",
          };
        }}
        {...managerTableProps}
      />*/}
      {/* TODO: 추후 연동 <Table
        bodyStyle={{ width: "100%" }}
        headerStyle={{
          width: "100%",
          paddingInline: "30px",
          overflow: "hidden",
        }}
        rowStyler={() => {
          return {
            paddingInline: "30px",
            height: "60px",
          };
        }}
        {...mapTableProps}
      />*/}
      <Table
        headerStyle={{ paddingInline: "30px" }}
        rowStyler={() => {
          return {
            height: "auto",
          };
        }}
        {...clanTableProps}
      />
    </>
  );
};

export default Mobile;
