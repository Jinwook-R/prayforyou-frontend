import { MatchRecordList } from "../../components/list";
import {
  MatchMockUser,
  MatchRecordMockData,
} from "../../components/listItem/MatchListItem";
import {
  StyledDesktopWrapper,
  StyledMainContentWrapper,
} from "../../components";
import MatchDetailTable from "../../components/table/MatchDetailTable";
import { InfoFieldItem, MatchListItem } from "../../components/listItem";

const memberMockData = {
  nickname: "안녕하살법사",
  ladderPoint: 1727,
  kill: 12,
  death: 5,
  weapon: "라이플",
};

const matchDetailMockData = {
  map: "제3보급창고",
  gameTime: "게임시작시각: 2022년 09월 25일 오후 11시 55분",
  winTeam: {
    members: Array.from({ length: 5 }, (_, index) => {
      return { ...memberMockData };
    }),
  },
  loseTeam: {
    members: Array.from({ length: 5 }, (_, index) => {
      return { ...memberMockData };
    }),
  },
};

const ClanDetailPage = () => {
  const { winTeam, loseTeam } = matchDetailMockData;
  return (
    <StyledDesktopWrapper>
      <StyledMainContentWrapper>
        <div style={{ display: "flex", marginTop: "49px", gap: "117px" }}>
          <div style={{ overflow: "auto" }}>
            <div style={{ marginBottom: "10px" }}>
              <MatchListItem matchRecordMockData={{ ...MatchRecordMockData }} />
              <MatchDetailTable
                mapName={matchDetailMockData.map}
                gameTime={matchDetailMockData.gameTime}
                winTeam={winTeam}
                loseTeam={loseTeam}
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
