import axios from "axios";

// const BASE_URL = "https://relife-resource.onrender.com/api/";
const BASE_URL = "http://localhost:3000/api/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = () => {
  let token = null;

  // Check if "persist:root" is available in localStorage
  const persistRoot = localStorage.getItem("persist:root");
  if (persistRoot) {
    try {
      const persistRootParsed = JSON.parse(persistRoot);
      if (persistRootParsed.user) {
        const user = JSON.parse(persistRootParsed.user);
        token = user?.currentUser?.data?.token || null;
      }
    } catch (error) {
      console.error("Error parsing token from localStorage", error);
    }
  }
  console.log(token, "token");
  

  return axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Bearer ${token}` },
  });
};