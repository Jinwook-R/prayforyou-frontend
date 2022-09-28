import MapImage from "../assets/map.png";
const Map = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "350px",
        backgroundImage: `url(${MapImage})`,
        backgroundSize: "cover",
      }}
    ></div>
  );
};

export default Map;
