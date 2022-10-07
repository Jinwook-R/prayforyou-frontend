import { useMediaQuery } from "react-responsive";
import { BREAK_POINT } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import { useParams } from "react-router";
import { getClanRecords, getUserRecords } from "../../redux/record";
import { useInfinite } from "../../hooks";
import { getMatchDetail } from "../../redux/record/matchDetailSlice";
import { getClanInfo } from "../../redux/clan/clanInfoSlice";

const ClanDetailPage = ({ ...props }) => {
  const { clanId } = useParams();

  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINT})`,
  });

  const dispatch = useDispatch();
  const { info } = useSelector((store) => store.clanInfo);
  const { content, status, isEnd } = useSelector((store) => store.clanRecords);

  const { loadNextPage, slicedData, pageCount } = useInfinite({
    data: content,
    isSuccess: status === "succeeded",
    isAsync: false,
  });

  useEffect(() => {
    if (clanId !== undefined) {
      dispatch(getClanInfo({ clanId }));
    }
  }, [dispatch, clanId]);

  useEffect(() => {
    dispatch(getClanRecords({ clanId, page: pageCount }));
  }, [pageCount, dispatch, clanId]);

  const [selectedMatch, setSelectedMatch] = useState(null);

  const detailMatch = useSelector((store) => store.matchDetail);

  useEffect(() => {
    if (selectedMatch && selectedMatch.matchId) {
      dispatch(getMatchDetail({ matchId: selectedMatch.matchId }));
    }
  }, [dispatch, selectedMatch]);

  return isMobile ? (
    <Mobile
      selectedMatch={selectedMatch}
      setSelectedMatch={setSelectedMatch}
      matchDetail={detailMatch}
      clanInfo={info}
      matches={slicedData}
      isEnd={isEnd}
      onClickMoreButton={loadNextPage}
    />
  ) : (
    <Desktop
      selectedMatch={selectedMatch}
      setSelectedMatch={setSelectedMatch}
      matchDetail={detailMatch}
      clanInfo={info}
      matches={slicedData}
      isEnd={isEnd}
      onClickMoreButton={loadNextPage}
    />
  );
};

export default ClanDetailPage;
