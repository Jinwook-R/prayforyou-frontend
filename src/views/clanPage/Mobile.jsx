import React from "react";
import MobilePageToolbarWrapper from "../../components/wrapper/MobilePageToolbarWrapper";
import { Table } from "../../components/table";
import { MobileUserListItem } from "../../components/listItem";
import { StyledButtonWrapper } from "../../components/wrapper";
import { useNavigate } from "react-router-dom";

const Mobile = ({
  isFirstView,
  onClickViewChange,
  clanData,
  isEnd,
  onClickMoreButton,
}) => {
  const navigate = useNavigate();
  const mockTableProps = {
    cellConfigs: [
      {
        name: "참여중인 클랜",
        style: { width: "100%", fontSize: "15px" },
        renderer: (clan) => {
          return (
            <MobileUserListItem
              key={clan.clanId}
              onClick={() => navigate(`/clan/${clan.clanId}`)}
              isDownTarget={clan.downDanger}
              userName={clan.clanName}
              thumbnail={clan.clanMarkUrl}
              rank={clan.rank}
              winCount={clan.winCount}
              loseCount={clan.loseCount}
              ladderPoint={clan.score}
              rate={clan.rate}
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
            {`${isFirstView ? 1 : 2}부 리그`}
          </div>
          <div style={{ display: "inline-block", marginLeft: "50px" }}>
            <StyledButtonWrapper
              onClick={onClickViewChange}
              justifyContent={"center"}
              height={"24px"}
              style={{
                alignItems: "center",
                color: "white",
                fontSize: "16px",
              }}
            >
              {`${isFirstView ? 2 : 1}부 리그  >`}
            </StyledButtonWrapper>
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
          랭킹은 1시간마다 갱신되며, 배치고사가 종료된 클랜만 표시됩니다.
        </div>
      </MobilePageToolbarWrapper>
      {/* <Banner height={"50px"} margin={"10px"} />*/}
      <Table
        headerStyle={{ paddingInline: "30px" }}
        rowStyler={() => {
          return {
            height: "auto",
          };
        }}
        isEnd={isEnd}
        onClickMoreButton={onClickMoreButton}
        {...mockTableProps}
      />
    </>
  );
};

export default Mobile;
