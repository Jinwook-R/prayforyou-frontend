import { MatchRecordList } from "../../components/list";
import { MatchRecordMockData } from "../../components/listItem/MatchListItem";
import {
  StyledDesktopWrapper,
  StyledMainContentWrapper,
} from "../../components";

const ClanDetailPage = () => {
  return (
    <StyledDesktopWrapper>
      <StyledMainContentWrapper>
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
