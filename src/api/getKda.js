import axios from "axios";
import { DESTINATION_DOMAIN_ADDRESS } from "../utils/constants";

const getKda = async (userId) => {
  const datas = await axios.get(
    `${DESTINATION_DOMAIN_ADDRESS}/${userId}/stats`
  );
  return datas.data.data;
};

export default getKda;
