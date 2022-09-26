import axios from "axios";

const getRoundInfo = async (userId) => {
  const datas = await axios.get(
    `https://api.pray4you.net/search/${userId}/round`
  );
  return datas.data.data;
};

export default getRoundInfo;
