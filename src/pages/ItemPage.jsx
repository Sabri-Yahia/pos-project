import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ItemPage() {
  const params = useParams();
  let itemId = params.itemId;
  const [cat, setCat] = useState();
  const [items, setItems] = useState([]);
  useEffect(() => {
    let url = `http://localhost:1337/api/categories/${itemId}`;
    axios
      .get(url, {
        params: {
          populate: {
            foods: {
              populate: "*",
            },
          },
        },
      })
      .then((res) => {
        setItems(res.data.data.foods);
        setCat(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="w-full h-full overflow-auto bg-white">
      <h1>{cat?.name} Items</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((el) => (
          <div
            key={el.documentId}
            className="flex flex-col items-center rounded-3xl shadow border hover:bg-yellow transition duration-500 ease-in-out p-2"
          >
            <img
              src={"http://localhost:1337" + el.img.url}
              className="w-[200px]"
            />
            <h1 className="text-2xl">{el.name}</h1>
            <p>Price: EGP {`${el.price}`}</p>
            <button className="btn btn-primary w-full">Add To Invoice</button>
          </div>
        ))}
      </div>
    </div>
  );
}
