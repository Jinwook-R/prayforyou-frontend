import MapImage from "../assets/map.png";
const Map = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        maxWidth: "750px",
        minHeight: "600px",
        maxHeight: "600px",
        backgroundImage: `url(${MapImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default Map;
