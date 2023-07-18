import React, { useEffect, useState } from "react";
import data from "../product.json";
import Product from "../Card";
import "./Product.css";

export default function Products() {
  const [products, setProducts] = useState(data.products);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [products]);

  const fillterData = (data, category) => {
    if (category === "all") {
      setProducts(data.products);
      return;
    }
    const newData = data.products.filter((item) => item.category === category);
    setProducts(newData);
  };
  return (
    <div className="pageProduct">
      <div className="modele">
        <button type="submit" onClick={() => fillterData(data, 0)}>
          Modele 1
        </button>
        <button type="submit" onClick={() => fillterData(data, 1)}>
          Modele 2
        </button><button type="submit" onClick={() => fillterData(data, 2)}>
          Modele 3
        </button><button type="submit" onClick={() => fillterData(data, 3)}>
          Modele 4
        </button><button type="submit" onClick={() => fillterData(data, 4)}>
          Modele 5
        </button><button type="submit" onClick={() => fillterData(data, "all")}>
          All
        </button>
      </div>
      <div className="prooductList2">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
