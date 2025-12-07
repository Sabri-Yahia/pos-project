import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    let url = "http://localhost:1337/api/categories?populate=*";
    axios
      .get(url)
      .then((res) => setMenu(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="w-full h-full overflow-auto bg-white">
      <h1>Menu</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {menu.map((el) => (
          <Link
            to={`./${el.documentId}`}
            key={el.documentId}
            className="flex flex-col items-center rounded-3xl shadow border hover:bg-yellow transition duration-500 ease-in-out p-2"
          >
            <img
              src={"http://localhost:1337" + el.img.url}
              className="w-[200px]"
            />
            <h1 className="text-2xl">{el.name}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
}
