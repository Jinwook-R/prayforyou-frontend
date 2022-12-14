import React from "react";
import { Table } from "../../components/table";
import MobilePageToolbarWrapper from "../../components/wrapper/MobilePageToolbarWrapper";
import MobileClanListItem from "../../components/listItem/MobileClanListItem";
import { useNavigate } from "react-router-dom";

const Mobile = ({
  leagueTitle,
  leagueType,
  clanData,
  //managerTableProps,
  //mapTableProps,
  isFavorite,
  onClickFavorite,
}) => {
  const navigate = useNavigate();
  const clanTableProps = {
    cellConfigs: [
      {
        name: "",
        style: { width: "100%", fontSize: "15px" },
        renderer: (clan) => {
          return (
            <MobileClanListItem
              winCount={clan.winCount}
              onClickName={() => {
                navigate(`/clan/${clan.clanId}`);
              }}
              loseCount={clan.loseCount}
              winLosePercent={clan.winLosePercent}
              clanName={clan.clanName}
              thumbnail={clan.clanMarkUrl}
              clanLevel={clan.clanLevel}
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
            {`${leagueType}`}
          </div>
          <div
            style={{ height: "24px", display: "flex", alignItems: "center" }}
          >
            {`${clanData.length}?????? ?????? ?????????`}
          </div>
        </div>
      </MobilePageToolbarWrapper>
      {/*<Banner height={"50px"} margin={"10px"} /> */}
      {/* TODO ?????? ?????? <Table
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
      {/* TODO: ?????? ?????? <Table
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
        headerStyle={{ height: "0px" }}
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
