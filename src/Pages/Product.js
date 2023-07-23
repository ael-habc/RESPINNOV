import React, { useEffect, useState } from "react";
import data from "../product.json";
import Product from "../Card";
import "./Product.css";
import { Button, ButtonGroup, Radio } from 'bootstrap-4-react';

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
      <ButtonGroup toggle>
      <Button primary active as="label" onClick={()=>fillterData(data,"all")}>
          <Radio autoComplete="off" />
          All Product
        </Button>
        <Button secondary as="label"  onClick={() => fillterData(data, "A5 Advantage")}>
          <Radio autoComplete="off" />
          A5 Advantage
        </Button>
        <Button secondary as="label" onClick={()=> fillterData(data,"A7 Advantage")} >
          <Radio autoComplete="off" />
          A7 Advantage
        </Button>
        <Button secondary as="label" onClick={()=>fillterData(data,"Mindray WATO EX-65/55")}>
          <Radio autoComplete="off" />
          Mindray WATO EX-65/55
        </Button>
        
      </ButtonGroup>
        
      </div>
      <div className="prooductList2">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
