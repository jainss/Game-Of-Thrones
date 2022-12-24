import axios from "axios";

const API_URL = "https://thronesapi.com/api/v2/Characters";

export const fetchData = async (text) => {
  try {
    return await axios.get(`${API_URL}?firstname=${text}`);
  } catch (err) {
    console.log(`The Error is ${err}`);
  }
};



