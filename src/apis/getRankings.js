import axios from "axios";
import DESTINATION_DOMAIN_ADDRESS from "../utils";

const getRankings = async () => {
  const datas = await axios.get(`${DESTINATION_DOMAIN_ADDRESS}/view/ranking`);
  return datas.data;
};

export default getRankings;
