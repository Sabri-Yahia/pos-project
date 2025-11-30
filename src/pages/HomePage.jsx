import axios from "axios";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [user, setUser] = useState();

  const url = "http://82.112.241.233:1993/api/users/me";

  useEffect(() => {
    let token =
      localStorage.getItem("token") || sessionStorage.getItem("token");

    let tokenReq = {
      headers: {
        Authorization: `bearer ${token}`,
      },
    };

    axios
      .get(url, tokenReq)
      .then((res) => {
        setUser(res.data);
      })
      .catch((rej) => console.log(rej));
  }, []);

  return <div>Welcome, {user?.username}</div>;
}
