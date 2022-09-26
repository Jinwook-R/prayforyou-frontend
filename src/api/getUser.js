import axios from "axios";
import DESTINATION_DOMAIN_ADDRESS from "../utils";

const getUser = async (userId) => {
  const datas = await axios.get(`${DESTINATION_DOMAIN_ADDRESS}/user/${userId}`);
  return datas.data.data;
};
export default getUser;
