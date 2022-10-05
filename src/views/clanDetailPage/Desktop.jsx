import {
  StyledDesktopWrapper,
  StyledMainContentWrapper,
} from "../../components";
import { InfoFieldItem, MatchListItem } from "../../components/listItem";
import { MatchRecordMockData } from "../../components/listItem/MatchListItem";
import MatchDetailTable from "../../components/table/MatchDetailTable";
import { MatchRecordList } from "../../components/list";
import { matchDetailMockData } from "../RecordPage/RecordPage";

const Desktop = ({ userBattle, matches }) => {
  const sampleDetailMatch = {
    ...matchDetailMockData,
  };

  return (
    <StyledDesktopWrapper>
      {/* TODO : Top 바 기록실, 클랜 페이지 각각 커스텀 필요 */}
      <StyledMainContentWrapper>
        <div style={{ display: "flex", marginTop: "49px", gap: "117px" }}>
          <div style={{ overflow: "auto" }}>
            <div style={{ marginBottom: "10px" }}>
              <MatchListItem
                matchData={{ ...MatchRecordMockData }}
                rightButtonText={"닫기"}
              />
              <MatchDetailTable
                mapName={sampleDetailMatch.mapName}
                gameTime={sampleDetailMatch.gameTime}
                redTeam={sampleDetailMatch.redTeam}
                blueTeam={sampleDetailMatch.blueTeam}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <MatchRecordList matches={matches} />
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
export default Desktop;
