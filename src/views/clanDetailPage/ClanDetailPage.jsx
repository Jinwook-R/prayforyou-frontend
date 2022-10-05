import { MatchRecordList } from "../../components/list";
import { MatchRecordMockData } from "../../components/listItem/MatchListItem";
import {
  StyledDesktopWrapper,
  StyledMainContentWrapper,
} from "../../components";
import MatchDetailTable from "../../components/table/MatchDetailTable";
import { InfoFieldItem, MatchListItem } from "../../components/listItem";

/*
const memberMockData = {
  nickname: "안녕하살법사",
  ladderPoint: 1727,
  kill: 12,
  death: 5,
  weapon: "라이플",
};*/

const ClanDetailPage = () => {
  const { redTeam, blueTeam } = MatchRecordMockData;
  return (
    <StyledDesktopWrapper>
      <StyledMainContentWrapper>
        <div style={{ display: "flex", marginTop: "49px", gap: "117px" }}>
          <div style={{ overflow: "auto" }}>
            <div style={{ marginBottom: "10px" }}>
              <MatchListItem
                matchData={{ ...MatchRecordMockData }}
                rightButtonText={"닫기"}
              />
              <MatchDetailTable
                mapName={MatchRecordMockData.mapName}
                gameTime={MatchRecordMockData.gameTime}
                redTeam={redTeam}
                blueTeam={blueTeam}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <MatchRecordList
                matches={Array.from({ length: 15 }, (_, index) => {
                  return {
                    ...MatchRecordMockData,
                    isWin: index % 2 === 0,
                  };
                })}
              />
            </div>
          </div>
          <div
            style={{ display: "flex", width: "308px", flexDirection: "column" }}
          >
            <InfoFieldItem fieldName={"래더"} value={`${1231}점`} />
            <InfoFieldItem fieldName={"승률"} value={`${1231}점`} />
            <InfoFieldItem fieldName={"랭킹"} value={`${1231}점`} />
          </div>
        </div>
      </StyledMainContentWrapper>
    </StyledDesktopWrapper>
  );
};

export default ClanDetailPage;
