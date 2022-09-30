import { Map, Ranking } from "../../components";
import { useSelector } from "react-redux";
import ButtonGroup from "../../components/ButtonGroup";

const Desktop = () => {
  const userBattle = useSelector((state) => state.battle.battle);
  const ranking = useSelector((store) => store.ranking.ranking);
  
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Map battle={userBattle}></Map>
      <div>
        <ButtonGroup></ButtonGroup>
        <Ranking data={ranking} />
      </div>
    </div>
  );
};

export default Desktop;
