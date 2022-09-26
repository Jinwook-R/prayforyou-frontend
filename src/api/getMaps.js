import axios from "axios";

const getMaps = async () => {
  const datas = await axios.get(`https://api.pray4you.net/battle/positions`);
  return datas.data.data;
};

export default getMaps;
