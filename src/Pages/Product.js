import React, { useEffect, useState } from "react";
import data from "../pieces.json";
import Product from "../Card2";
import "./Product.css";
import { Button, ButtonGroup, Radio } from 'bootstrap-4-react';

export default function Products() {
  const [products, setProducts] = useState(data.pieces);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [products]);

  const fillterData = (data, category) => {
    if (category === "all") {
      setProducts(data.products);
      return;
    }
    const newData = data.pieces.filter((item) => item.category === category);
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
        <Button secondary as="label"  onClick={() => fillterData(data, "WATO EX-35")}>
          <Radio autoComplete="off" />
          WATO EX-35      </Button>
        <Button secondary as="label" onClick={()=> fillterData(data,"Tubulures et tuyaux")} >
          <Radio autoComplete="off" />
          Tubulures et tuyaux
        </Button>
        <Button secondary as="label" onClick={()=>fillterData(data,"Masques faciaux et circuits respiratoires")}>
          <Radio autoComplete="off" />
          Masques faciaux et circuits respiratoires
        </Button>
        <Button secondary as="label" onClick={()=>fillterData(data,"Capteurs")}>
          <Radio autoComplete="off" />
          Capteurs
        </Button>
        <Button secondary as="label" onClick={()=>fillterData(data,"Batteries")}>
          <Radio autoComplete="off" />
          Batteries
        </Button>
      </ButtonGroup>
        
      </div>
      <div className="prooductList2">
        {products.map((product) => (
          <Product key={product.id} product={product}/>
        ))}
        
      </div>
    </div>
  );
}
