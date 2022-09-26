import axios from "axios";

const getKda = async (userId) => {
  const datas = await axios.get(
    `https://api.pray4you.net/search/${userId}/stats`
  );
  return datas.data.data;
};

export default getKda;
