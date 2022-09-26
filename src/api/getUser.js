import axios from "axios";

const getUser = async (userId) => {
  const datas = await axios.get(`https://api.pray4you.net/user/${userId}`);
  return datas.data.data;
};
export default getUser;
