import axios from "axios";
import { useState } from "react";
import { saveUser } from "~/utils/localStorage";

function useLogin() {
  const [loading, setLoading] = useState(false);

  const login = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/authentication",
        data
      );
      const { access_token, refresh_token } = response.data;
      saveUser(access_token, refresh_token);
    } catch (error) {
      console.error("Đăng nhập thất bại:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
}

export default useLogin;
