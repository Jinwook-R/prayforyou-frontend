import axios from "axios";

const getRifleInfo = async (userId) => {
  const datas = await axios.get(
    `https://api.pray4you.net/search/${userId}/gun`
  );
  return datas.data.data;
};

export default getRifleInfo;
