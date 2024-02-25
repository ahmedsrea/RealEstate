import axios from "../api/axios";
import useAuth from "./useAuth";

export default function useRefreshToken() {
  const { setAuth } = useAuth() as { setAuth: (auth: any) => void };

  const refresh = async () => {
    const response = await axios.get("/users/refresh", {
      withCredentials: true,
    });
    setAuth((prev) => {
      console.log(prev);
      console.log(response.data.accessToken);
      return {
        ...prev,
        accessToken: response.data.accessToken,
      };
    });
    return response.data.accessToken;
  };
  return refresh;
}
