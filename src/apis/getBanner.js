import axios from "axios";
import { DESTINATION_DOMAIN_ADDRESS } from "../utils/constants";

const getBanner = async () => {
  const datas = await axios.get(`${DESTINATION_DOMAIN_ADDRESS}/banner`);
  return datas.data.data;
};

export default getBanner;
