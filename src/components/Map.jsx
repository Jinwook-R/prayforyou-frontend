import MapImage from "../assets/map.png";
const Map = () => {
  return (
    <div
      style={{
        height: "350px",
        backgroundImage: `url(${MapImage})`,
        backgroundSize: "cover",
      }}
    ></div>
  );
};

export default Map;
