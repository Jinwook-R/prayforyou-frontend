import MapImage from "../assets/map.png";
const Map = ({ battle }) => {
  const { battlePlace, battleRound, battleStats } = battle;

  return (
    <div
      style={{
        height: "500px",
        backgroundImage: `url(${MapImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default Map;
