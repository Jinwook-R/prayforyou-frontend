import axios from "axios";

const getRankings = async () => {
  const datas = await axios.get(`https://api.pray4you.net/view/ranking`);
  return datas.data;
};

export default getRankings;
