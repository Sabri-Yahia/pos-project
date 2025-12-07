import axios from "axios";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [user, setUser] = useState();
  const [phones, setPhones] = useState([]);

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

  useEffect(() => {
    let theurl = "http://localhost:1337/api/phones?populate=*";
    axios
      .get(theurl)
      .then((res) => {
        setPhones(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="w-full h-dvh overflow-auto">
      <h1>Welcome, {user?.username}</h1>
      <div className="grid grid-cols-3 gap-3">
        {phones.map((el) => {
          return (
            <div
              key={el.documentId}
              className="card bg-base-100 shadow-sm text-white"
            >
              <figure>
                <img
                  src={"http://localhost:1337" + el.img.url}
                  alt="Shoes"
                  className="w-full h-[400px] object-cover "
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{el.name}</h2>
                <p>Price is : {el.price}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
