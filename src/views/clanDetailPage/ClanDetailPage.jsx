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
        <MatchDetailTable winTeam={winTeam} loseTeam={loseTeam} />
        <MatchRecordList
          matches={Array.from({ length: 15 }, (_, index) => {
            return {
              ...MatchRecordMockData,
              isWin: index % 2 === 0,
            };
          })}
        />
      </StyledMainContentWrapper>
    </StyledDesktopWrapper>
  );
};

export default ClanDetailPage;
